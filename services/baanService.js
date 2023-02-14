import { BaanModel } from "../models/baanModel.js";

export class BaanService {
  
  constructor() { };

  async getAll(bhaaiId, customerId) {
    return BaanModel.find({
      bhaaiId: bhaaiId,
      customerId,
    });
  }

  async search(customerId, searchBy) {
    return BaanModel.find({
      ...searchBy,
      customerId,
    });
  }

  async getTotalAmount(bhaaiId, customerId) {
    const agg =  (await BaanModel.aggregate([
      { 
        $match: {
          bhaaiId,
          customerId,
        },
      },
      { 
        $group: { 
          _id : null, 
          sum : { 
            $sum: "$amount"
          },
        },
      },
    ]));
    
    return agg[0].sum;
  }

  async getBaanById(id, customerId) {
    return BaanModel.findOne({
      _id: id,
      customerId,
    });
  }

  async createBaan(data) {
    const baan = await BaanModel.create(data);

    return baan;
  }

  async updateBaanById(id, data, customerId) {
    const baan = await BaanModel.findOneAndUpdate(
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

    return baan;
  }

  async deleteBaanById(id, customerId) {
    return BaanModel.deleteOne({
      id: id,
      customerId,
    });
  }
}