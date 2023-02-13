import mongoose from 'mongoose';
import { v4 } from 'uuid';

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
});

export const CustomerModel = mongoose.model('Customer', customerSchema);