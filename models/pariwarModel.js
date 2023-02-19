import mongoose from 'mongoose';
import { v4 } from 'uuid';

const pariwarSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => v4(), 
  },
  name: {
    required: true,
    type: String
  }
  
});  

export const PariwarModel = mongoose.model('pariwar', pariwarSchema);  