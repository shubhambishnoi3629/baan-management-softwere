import { RelativesModel } from "../models/relativesModel.js";

export class RelativesService {
  
  constructor() { };

  async getAll(pariwarId, customerId) {
    return RelativesModel.find({
      pariwarId: pariwarId,
      customerId,
    });
  }

  async createRelatives(data) {
    const relatives = await RelativesModel.create(data);

    return relatives;
  }

  async updateRelativesById(id, data, customerId) {
    const relatives = await RelativesModel.findOneAndUpdate(
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

    return relatives;
  }

  async deleteRelativesById(id, customerId) {
    return RelativesModel.deleteOne({
      id: id,
      customerId,
    });
  }
}