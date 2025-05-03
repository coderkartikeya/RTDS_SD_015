// models/History.js

const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  taskType: {
    type: String,
    enum: ['training', 'inference', 'data-prep'],
    required: true,
  },

  modelName: {
    type: String,
    required: true,
  },

  gpuUsed: {
    type: String,
    required: true,
  },

  durationMinutes: {
    type: Number,
    required: true,
  },

  status: {
    type: String,
    enum: ['success', 'failed', 'running'],
    default: 'running',
  },

  outputLocation: {
    type: String, // URL or file path
  },

  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('History', historySchema);
