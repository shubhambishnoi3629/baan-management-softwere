import mongoose from 'mongoose';
import { environment } from './environment.js';

mongoose.set('strictQuery', true);
import { CustomerModel } from "./models/customerModel.js";

mongoose.connect(environment.dbUrl);
const db = mongoose.connection;

db.on('error', (error) => {
    console.log(error)
});

db.once('connected', async () => {
  const customers = await CustomerModel.find({});
  console.log(customers);
});



