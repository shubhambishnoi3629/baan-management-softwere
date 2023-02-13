import mongoose from 'mongoose';
import { environment } from '../environment.js';

mongoose.set('strictQuery', true);

class Database {
  db;

  constructor() {}

  init() {
    mongoose.connect(environment.dbUrl);
    this.db = mongoose.connection;
    
    this.db.on('error', (error) => {
        console.log(error)
    });
    
    this.db.once('connected', () => {
        console.log('Database Connected');
    });
  }
}

export const database = new Database();