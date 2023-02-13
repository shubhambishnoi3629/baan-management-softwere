import { BaanModel } from "../models/baanModel.js";

export class BaanService {
  
  constructor() { };

  async getAll(bhaaiId) {
    return BaanModel.find({
      bhaaiId: bhaaiId
    });
  }

  async getBaanById(id) {
    return BaanModel.findOne({
      _id: id
    });
  }

  async createBaan(data) {
    const baan = await BaanModel.create(data);

    return baan;
  }

  async updateBaanById(id, data) {
    const baan = await BaanModel.findOneAndUpdate(
      { 
        _id: id
      },
      {
        $set: data
      },
      {
        new: 1
      }
    );

    return baan;
  }

  async deleteBaanById(id) {
    return BaanModel.deleteOne({
      id: id
    });
  }
}