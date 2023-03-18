import mongoose from 'mongoose';
import { environment } from './environment.js';
import md5 from 'md4';

mongoose.set('strictQuery', true);
import { CustomerModel } from "./models/customerModel.js";

mongoose.connect(environment.dbUrl);
const db = mongoose.connection;

db.on('error', (error) => {
    console.log(error)
});

db.once('connected', async () => {
  const customers = await CustomerModel.find({});
  for await (const customer of customers) {
    const id = customer._id;
    const password = customer.password;
    await CustomerModel.findOneAndUpdate(
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



