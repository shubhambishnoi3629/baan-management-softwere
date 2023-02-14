import mongoose from 'mongoose';
import { v4 } from 'uuid';

const baanSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => v4(), 
  },
  firstName: {
    required: true,
    type: String
  }, 
  lastName: {
    required: true,
    type: String
  },
  fathersName: {
    required: true,
    type: String
  },
  address: {
    required: true,
    type: String
  },
  nickName: {
    required: false,
    type: String
  },
  amount: {
    required: true,
    type: Number
  },
  customerId:{
    required: true,
    type: String
  },
  bhaaiId: {
    required: true,
    type: String    
  }
});

export const BaanModel = mongoose.model('Baan', baanSchema);