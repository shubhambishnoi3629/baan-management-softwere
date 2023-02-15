import mongoose from 'mongoose';
import { v4 } from 'uuid';

const pariwarRolesSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => v4(), 
   },
  roles: {
    required: true,
    type: String
  },
  customerId: {
    required: true,
    type: String,
    unique: true
  },
  pariwarId: {
    required: true,
    type: String
  },
});

export const PariwarRolesModel = mongoose.model('pariwarRoles', pariwarRolesSchema);