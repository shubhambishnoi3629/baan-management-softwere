import mongoose from 'mongoose';
import { v4 } from 'uuid';

const customersSchema = new mongoose.Schema({
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
    required: true,
    type: Number
  },
  pariwarRelatives: [{
    required: true,
    type: Array
  }],
});

export const CustomersModel = mongoose.model('Customers', customersSchema);