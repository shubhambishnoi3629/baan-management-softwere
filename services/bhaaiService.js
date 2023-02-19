export class BhaaiService {
  bhaaiModel;
  constructor(bhaaiModel) { 
    this.bhaaiModel = bhaaiModel;
  };

  async getAll(customerId) {
    return this.bhaaiModel.find({
      customerId: customerId,
    });
  }

  async getBhaaiById(id, customerId) {
    return this.bhaaiModel.findOne({
      _id: id,
      customerId,
    });
  }

  async createBhaai(data) {
    const bhaai = await this.bhaaiModel.create(data);

    return bhaai;
  }

  async updateBhaaiById(id, data) {
    const bhaai = await this.bhaaiModel.findOneAndUpdate(
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
    return this.bhaaiModel.deleteOne({
      _id: id,
    });
  }

  async getOrCreateBhaai(marriage,customerId) {
    const bhaai = await this.bhaaiModel.findOne({
      marriage,
      customerId,
    });
    
    if (bhaai) {
      return bhaai;
    }
    return this.bhaaiModel.create({
      marriage,
      customerId,
      date: (new Date()).toISOString(),
    });
  }
}