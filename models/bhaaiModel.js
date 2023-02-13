import mongoose from 'mongoose';
import { v4 } from 'uuid';

const bhaaiSchema = new mongoose.Schema ({
  _id: {
    type: String,
    default: () => v4(), 
  },
  marriage: {
    required: true,
    type: String
  },
  date:{
    required: true,
    type: String
  },
  customerId:{
    required: true,
    type: String
  },
});

export const BhaaiModel = mongoose.model('bhaai', bhaaiSchema);  