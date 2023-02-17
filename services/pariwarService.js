import { PariwarModel } from "../models/pariwarModel.js";

export class PariwarService {
  
  constructor() { };

  async getPariwar(customerId) {
    return PariwarModel.find({
      customerId: customerId,
    });
  }

  async createPariwar(data) {
    const pariwar = await PariwarModel.create(data);

    return pariwar;
  }

  async updatePariwarById(id, data) {
    const pariwar = await PariwarModel.findOneAndUpdate(
      { _id: id,
     
      },
      {
        $set: data
      },
      {
        new: 1
      }
    );

    return pariwar;
  }

  async deletePariwarById(id) {
    return PariwarModel.deleteOne({
      _id: id,
    });
  }
}