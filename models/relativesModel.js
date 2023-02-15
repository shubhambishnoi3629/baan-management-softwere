import mongoose from 'mongoose';
import { v4 } from 'uuid';

const relativesSchema = new mongoose.Schema({
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
    type: Number
  },
  details:{
    required: true,
    type: String
  },
  assignTo: {
    required: true,
    type: String    
  },
  pariwarId: {
    required: true,
    type: String
  },
});

export const RelativesModel = mongoose.model('relatives', relativesSchema);