import { BhaaiModel } from "../models/bhaaiModel.js";

export class BhaaiService {
  
  constructor() { };

  async getAll(customerId) {
    return BhaaiModel.find({
      customerId: customerId,
    });
  }

  async getBhaaiById(id, customerId) {
    return BhaaiModel.findOne({
      _id: id,
      customerId,
    });
  }

  async createBhaai(data) {
    const bhaai = await BhaaiModel.create(data);

    return bhaai;
  }

  async updateBhaaiById(id, data) {
    const bhaai = await BhaaiModel.findOneAndUpdate(
      { _id: id,
     
      },
      {
        $set: data
      },
      {
        new: 1
      }
    );

    return bhaai;
  }

  async deleteBhaaiById(id) {
    return BhaaiModel.deleteOne({
      id: id,
     
    });
  }
}