export class RelativesService {
  relativesModel
  constructor(relativesModel) {
    this.relativesModel = relativesModel
   };

  async getAll(pariwarId, customerId) {
    return this.relativesModel.find({
      pariwarId: pariwarId,
      customerId,
    });
  }

  async createRelatives(data) {
    const relatives = await this.relativesModel.create(data);

    return relatives;
  }

  async updateRelativesById(id, data, customerId) {
    const relatives = await this.relativesModel.findOneAndUpdate(
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
    return this.relativesModel.deleteOne({
      id: id,
      customerId,
    });
  }
}