export class NimtaService { 
   nimtaModel;
  
  constructor(nimtaModel) {
    this.nimtaModel = nimtaModel
   };

  async getNimta(pariwarId) {
    return  this.nimtaModel.find({
      pariwarId: pariwarId,
    });
  }

  async createNimta(data) {
    const nimta = await this.nimtaModel.create(data);

    return nimta;
  }

  async updateNimtaById(id, data) {
    const nimta = await  this.nimtaModel.findOneAndUpdate(
      { 
        _id: id,
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

  async deleteNimtaById(id) {
    return  this.nimtaModel.deleteOne({
      id: id,
    });
  }


  async addRelativeById(id, Ids) {
    const relative = await  this.nimtaModel.findOneAndUpdate(
      { 
        _id: id,
        
      },
      {
        $push: {relative: Ids}
      },
      {
        new: 1
      }
    );

    return relative;
    
  }
}