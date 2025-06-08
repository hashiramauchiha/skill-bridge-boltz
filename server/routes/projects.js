import express from 'express';
import Project from '../models/Project.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Get all projects (for freelancer search)
router.get('/', async (req, res) => {
  try {
    const { skills, budget, timeline, category } = req.query;
    
    let query = { status: 'open' };
    
    if (skills) {
      query.skills = { $in: skills.split(',') };
    }
    
    if (budget) {
      const [min, max] = budget.split('-').map(Number);
      query['budget.min'] = { $gte: min };
      if (max) query['budget.max'] = { $lte: max };
    }
    
    if (timeline) {
      query.timeline = { $regex: timeline, $options: 'i' };
    }
    
    if (category) {
      query.category = category;
    }

    const projects = await Project.find(query)
      .populate('client', 'firstName lastName company avatar rating reviewCount')
      .sort({ createdAt: -1 })
      .limit(20);

    res.json(projects);
  } catch (error) {
    console.error('Get projects error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create new project
router.post('/', authenticateToken, async (req, res) => {
  try {
    if (req.user.role !== 'client') {
      return res.status(403).json({ message: 'Only clients can create projects' });
    }

    const project = new Project({
      ...req.body,
      client: req.user.userId
    });

    await project.save();
    await project.populate('client', 'firstName lastName company avatar');

    res.status(201).json(project);
  } catch (error) {
    console.error('Create project error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get user's projects
router.get('/my-projects', authenticateToken, async (req, res) => {
  try {
    let query = {};
    
    if (req.user.role === 'client') {
      query.client = req.user.userId;
    } else {
      query.freelancer = req.user.userId;
    }

    const projects = await Project.find(query)
      .populate('client', 'firstName lastName company avatar')
      .populate('freelancer', 'firstName lastName avatar title rating')
      .sort({ createdAt: -1 });

    res.json(projects);
  } catch (error) {
    console.error('Get my projects error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Submit proposal
router.post('/:projectId/proposals', authenticateToken, async (req, res) => {
  try {
    if (req.user.role !== 'freelancer') {
      return res.status(403).json({ message: 'Only freelancers can submit proposals' });
    }

    const project = await Project.findById(req.params.projectId);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    // Check if already submitted proposal
    const existingProposal = project.proposals.find(
      p => p.freelancer.toString() === req.user.userId
    );

    if (existingProposal) {
      return res.status(400).json({ message: 'You have already submitted a proposal for this project' });
    }

    project.proposals.push({
      freelancer: req.user.userId,
      ...req.body
    });

    await project.save();

    res.json({ message: 'Proposal submitted successfully' });
  } catch (error) {
    console.error('Submit proposal error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;