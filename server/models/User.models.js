// models/User.js
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },

  password: {
    type: String,
    required: true,
  },

  isUsingGPU: {
    type: Boolean,
    default: false,
  },

  plan: {
    type: String,
    enum: ['free', 'pro', 'enterprise'],
    default: 'free',
  },

  joinedAt: {
    type: Date,
    default: Date.now,
  },

  history: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'History',
  }]
},{timestamps:true});

export const User=mongoose.model('User',userSchema);
