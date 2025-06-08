import express from 'express';
import Message from '../models/Message.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Get messages for a project
router.get('/project/:projectId', authenticateToken, async (req, res) => {
  try {
    const messages = await Message.find({
      project: req.params.projectId,
      $or: [
        { sender: req.user.userId },
        { recipient: req.user.userId }
      ]
    })
    .populate('sender', 'firstName lastName avatar')
    .populate('recipient', 'firstName lastName avatar')
    .sort({ createdAt: 1 });

    res.json(messages);
  } catch (error) {
    console.error('Get messages error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Send message
router.post('/', authenticateToken, async (req, res) => {
  try {
    const { projectId, recipientId, content, messageType = 'text' } = req.body;

    const message = new Message({
      project: projectId,
      sender: req.user.userId,
      recipient: recipientId,
      content,
      messageType
    });

    await message.save();
    await message.populate('sender', 'firstName lastName avatar');
    await message.populate('recipient', 'firstName lastName avatar');

    res.status(201).json(message);
  } catch (error) {
    console.error('Send message error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Mark message as read
router.put('/:messageId/read', authenticateToken, async (req, res) => {
  try {
    const message = await Message.findById(req.params.messageId);
    
    if (!message || message.recipient.toString() !== req.user.userId) {
      return res.status(404).json({ message: 'Message not found' });
    }

    message.isRead = true;
    message.readAt = new Date();
    await message.save();

    res.json({ message: 'Message marked as read' });
  } catch (error) {
    console.error('Mark message read error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get recent messages for dashboard
router.get('/recent', authenticateToken, async (req, res) => {
  try {
    const messages = await Message.find({
      recipient: req.user.userId
    })
    .populate('sender', 'firstName lastName avatar')
    .populate('project', 'title')
    .sort({ createdAt: -1 })
    .limit(10);

    res.json(messages);
  } catch (error) {
    console.error('Get recent messages error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;