import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  freelancer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  budget: {
    min: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      required: true
    },
    type: {
      type: String,
      enum: ['fixed', 'hourly'],
      default: 'fixed'
    }
  },
  timeline: {
    type: String,
    required: true
  },
  skills: [{
    type: String,
    required: true
  }],
  category: {
    type: String,
    required: true
  },
  experience: {
    type: String,
    enum: ['entry', 'intermediate', 'expert'],
    required: true
  },
  status: {
    type: String,
    enum: ['open', 'in_progress', 'completed', 'cancelled'],
    default: 'open'
  },
  proposals: [{
    freelancer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    coverLetter: String,
    proposedBudget: Number,
    proposedTimeline: String,
    attachments: [String],
    submittedAt: {
      type: Date,
      default: Date.now
    }
  }],
  milestones: [{
    title: String,
    description: String,
    amount: Number,
    dueDate: Date,
    status: {
      type: String,
      enum: ['pending', 'in_progress', 'submitted', 'approved', 'rejected'],
      default: 'pending'
    },
    deliverables: [String],
    submittedAt: Date,
    approvedAt: Date
  }],
  attachments: [String],
  isUrgent: {
    type: Boolean,
    default: false
  },
  proposalCount: {
    type: Number,
    default: 0
  },
  startDate: Date,
  endDate: Date,
  completedAt: Date
}, {
  timestamps: true
});

// Update proposal count when proposals are added
projectSchema.pre('save', function(next) {
  this.proposalCount = this.proposals.length;
  next();
});

export default mongoose.model('Project', projectSchema);