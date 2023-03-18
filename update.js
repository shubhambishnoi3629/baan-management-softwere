import mongoose from 'mongoose';
import { environment } from './environment.js';

mongoose.set('strictQuery', true);
import { CustomerModel } from "./models/customerModel.js";

mongoose.connect(environment.dbUrl);
const db = mongoose.connection;

db.on('error', (error) => {
    console.log(error)
});

db.once('connected', () => {
  const customers = CustomerModel.find({});
  for (const customer in customers) {
    const id = customer._id;
    const password = customer.password;
    CustomerModel.findOneAndUpdate(
      {
        _id: id
      },
      {
        $set: {
          password: md5('sdhukfcjiw' + password + 'kwygrj'),
        }
      }
    )
  }
});



