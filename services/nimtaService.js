export class NimtaService { 
   nimtaModel;
  
  constructor(nimtaModel) {
    this.nimtaModel = nimtaModel
   };

  async getNimta(pariwarId, customerId) {
    return  this.nimtaModel.find({
      pariwarId: pariwarId,
      customerId,
    });
  }

  async createNimta(data) {
    const nimta = await  this.nimtaModel.create(data);

    return nimta;
  }

  async updateNimtaById(id, data, customerId) {
    const nimta = await  this.nimtaModel.findOneAndUpdate(
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
    return  this.nimtaModel.deleteOne({
      id: id,
      customerId,
    });
  }
  async addRelativesById(id, Ids) {
    const relatives = await  this.nimtaModel.findOneAndUpdate(
      { 
        _id: id,
        
      },
      {
        $push: {relatives: Ids}
      },
      {
        new: 1
      }
    );

    return relatives;
    
  }
}