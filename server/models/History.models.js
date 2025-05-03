// models/History.js

import mongoose from "mongoose";

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

export const History=mongoose.model('History',historySchema);
