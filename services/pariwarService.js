export class PariwarService {
  pariwarModel
  constructor(pariwarModel) {
    this.pariwarModel = pariwarModel
   };

  async getPariwar(customerId) {
    return this.pariwarModel.find({
      customerId: customerId,
    });
  }

  async createPariwar(data) {
    const pariwar = await this.pariwarModel.create(data );

    return pariwar;
  }

  async updatePariwarById(id, data) {
    const pariwar = await this.pariwarModel.findOneAndUpdate(
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
    return this.pariwarModel.deleteOne({
      _id: id,
    });
  }
}