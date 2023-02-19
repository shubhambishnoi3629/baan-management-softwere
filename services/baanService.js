export class BaanService {
   baanModel;
  constructor(baanModel) {
    this.baanModel = baanModel;
   };

  async getAll(bhaaiId, customerId) {
    return this.baanModel.find({
      bhaaiId: bhaaiId,
      customerId,
    });
  }

  async search(customerId, searchBy) {
    return this.baanModel.find({
      $or: [
        { firstName: { $regex: searchBy, $options: 'i' }}, 
        { lastName: { $regex: searchBy, $options: 'i' }} ,
        { nickName: { $regex: searchBy, $options: 'i' }}, 
        { fathersName: { $regex: searchBy, $options: 'i' }},
        { address: { $regex: searchBy, $options: 'i' }}
      ],
      customerId,
    });
  }

  async getTotalAmount(bhaaiId, customerId) {
    const agg =  (await this.baanModel.aggregate([
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
    return this.baanModel.findOne({
      _id: id,
      customerId,
    });
  }

  async createBaan(data) {
    const baan = await this.baanModel.create(data);

    return baan;
  }

  async updateBaanById(id, data, customerId) {
    const baan = await this.baanModel.findOneAndUpdate(
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
    return this.baanModel.deleteOne({
      id: id,
      customerId,
    });
  }

  async deleteAllBaanByBhaaiId(bhaaiId) {
    return this.baanModel.deleteMany( {
      bhaaiId,
    })
 }
}