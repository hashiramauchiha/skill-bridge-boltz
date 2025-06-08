import express from 'express';
import Payment from '../models/Payment.js';
import Project from '../models/Project.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Get user's payments
router.get('/', authenticateToken, async (req, res) => {
  try {
    let query = {};
    
    if (req.user.role === 'client') {
      query.client = req.user.userId;
    } else {
      query.freelancer = req.user.userId;
    }

    const { status } = req.query;
    if (status && status !== 'all') {
      query.status = status;
    }

    const payments = await Payment.find(query)
      .populate('project', 'title')
      .populate('client', 'firstName lastName company')
      .populate('freelancer', 'firstName lastName')
      .sort({ createdAt: -1 });

    res.json(payments);
  } catch (error) {
    console.error('Get payments error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create payment (escrow)
router.post('/', authenticateToken, async (req, res) => {
  try {
    if (req.user.role !== 'client') {
      return res.status(403).json({ message: 'Only clients can create payments' });
    }

    const { projectId, milestoneId, amount, paymentMethod } = req.body;

    const project = await Project.findById(projectId);
    if (!project || project.client.toString() !== req.user.userId) {
      return res.status(404).json({ message: 'Project not found or unauthorized' });
    }

    const payment = new Payment({
      project: projectId,
      client: req.user.userId,
      freelancer: project.freelancer,
      milestone: milestoneId,
      amount,
      paymentMethod,
      status: 'in_escrow'
    });

    await payment.save();

    res.status(201).json(payment);
  } catch (error) {
    console.error('Create payment error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Release payment
router.put('/:paymentId/release', authenticateToken, async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.paymentId);
    
    if (!payment) {
      return res.status(404).json({ message: 'Payment not found' });
    }

    if (payment.client.toString() !== req.user.userId) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    payment.status = 'released';
    payment.escrowReleaseDate = new Date();
    await payment.save();

    res.json({ message: 'Payment released successfully' });
  } catch (error) {
    console.error('Release payment error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;