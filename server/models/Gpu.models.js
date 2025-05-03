import mongoose from 'mongoose';

const gpuResourceSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  resource_class: {
    type: String,
    required: true,
  },
  vcpus: {
    type: Number,
    required: true,
  },
  ram: {
    type: Number,
    required: true,
  },
  price_per_hour: {
    type: Number,
    required: true,
  },
  price_per_month: {
    type: Number,
    required: true,
  },
  price_per_spot: {
    type: Number,
    required: true,
  },
  gpu_description: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
}, { timestamps: true });

export const GpuResource = mongoose.model('GpuResource', gpuResourceSchema);
