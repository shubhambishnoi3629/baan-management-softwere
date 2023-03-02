import mongoose from 'mongoose';
import { v4 } from 'uuid';

const relativeSchema = new mongoose.Schema({
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
  phoneNumber: {
    required: true,
    type: String
  },
  details:{
    required: false,
    type: String
  },
  assignTo: {
    required: false,
    type: String    
  },
  pariwarId: {
    required: true,
    type: String
  },
});

export const RelativeModel = mongoose.model('relative', relativeSchema);