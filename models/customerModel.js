import mongoose from 'mongoose';
import { v4 } from 'uuid';
import { pariwarRolesSchema } from './pariwarRolesModel.js';

const customerSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => v4(), 
   },
  password: {
    required: true,
    type: String
  },
  email: {
    required: true,
    type: String,
    match: /.+\@.+\..+/,
    unique: true
  },
  phoneNumber: {
    required: false,
    type: Number
  },
  pariwarRoles: [{
    required: true,
    type: pariwarRolesSchema
  }],
  firstName: {
    required: false,
    type: String
  }, 
  lastName: {
    required: false,
    type: String
  },
  avatar: {
    required: false,
    type: String
  },
  username: {
    required: false,
    type: String
  } 
});

export const CustomerModel = mongoose.model('Customer', customerSchema);