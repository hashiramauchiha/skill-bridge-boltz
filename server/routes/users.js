import express from 'express';
import User from '../models/User.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Get user profile
router.get('/profile', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password');
    res.json(user);
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update user profile
router.put('/profile', authenticateToken, async (req, res) => {
  try {
    const updates = req.body;
    delete updates.password; // Don't allow password updates through this route
    delete updates.email; // Don't allow email updates through this route

    const user = await User.findByIdAndUpdate(
      req.user.userId,
      updates,
      { new: true, runValidators: true }
    ).select('-password');

    res.json(user);
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get freelancers (for client search)
router.get('/freelancers', async (req, res) => {
  try {
    const { skills, location, minRating, maxRate } = req.query;
    
    let query = { role: 'freelancer', isActive: true };
    
    if (skills) {
      query.skills = { $in: skills.split(',') };
    }
    
    if (location) {
      query.location = { $regex: location, $options: 'i' };
    }
    
    if (minRating) {
      query.rating = { $gte: parseFloat(minRating) };
    }
    
    if (maxRate) {
      query.hourlyRate = { $lte: parseFloat(maxRate) };
    }

    const freelancers = await User.find(query)
      .select('-password')
      .sort({ rating: -1, completedProjects: -1 })
      .limit(20);

    res.json(freelancers);
  } catch (error) {
    console.error('Get freelancers error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Add endorsement
router.post('/endorse/:userId', authenticateToken, async (req, res) => {
  try {
    const { skill, rating, comment } = req.body;
    const targetUserId = req.params.userId;

    const user = await User.findById(targetUserId);
    if (!user || user.role !== 'freelancer') {
      return res.status(404).json({ message: 'Freelancer not found' });
    }

    // Check if already endorsed this skill
    const existingEndorsement = user.endorsements.find(
      e => e.skill === skill && e.endorsedBy.toString() === req.user.userId
    );

    if (existingEndorsement) {
      return res.status(400).json({ message: 'You have already endorsed this skill' });
    }

    user.endorsements.push({
      skill,
      endorsedBy: req.user.userId,
      rating,
      comment
    });

    await user.save();

    res.json({ message: 'Endorsement added successfully' });
  } catch (error) {
    console.error('Add endorsement error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;