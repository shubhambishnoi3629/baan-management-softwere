import mongoose from 'mongoose';
import { v4 } from 'uuid';

export const pariwarRolesSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => v4(), 
   },
  role: {
    required: true,
    type: String
  },
  customerId: {
    required: true,
    type: String
  },
  pariwarId: {
    required: true,
    type: String
  },
});

export const PariwarRolesModel = mongoose.model('pariwarRoles', pariwarRolesSchema);