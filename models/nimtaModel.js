import mongoose from 'mongoose';
import { v4 } from 'uuid';

const nimtaSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => v4(), 
  },
  name: {
    required: true,
    type: String
  },
  relative: {
    required: true,
    type: Array
  },
});  

export const NimtaModel = mongoose.model('nimta', nimtaSchema);  