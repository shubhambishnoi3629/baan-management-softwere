import { NimtaModel } from "../models/nimtaModel.js";

export class NimtaService {
  
  constructor() { };

  async getNimta(pariwarId, customerId) {
    return NimtaModel.find({
      pariwarId: pariwarId,
      customerId,
    });
  }

  async createNimta(data) {
    const nimta = await NimtaModel.create(data);

    return nimta;
  }

  async updateNimtaById(id, data, customerId) {
    const nimta = await NimtaModel.findOneAndUpdate(
      { 
        _id: id,
        customerId,
      },
      {
        $set: data
      },
      {
        new: 1
      }
    );

    return nimta;
  }

  async deleteNimtaById(id, customerId) {
    return NimtaModel.deleteOne({
      id: id,
      customerId,
    });
  }
}