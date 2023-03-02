export class PariwarService {
  pariwarModel;
  pariwarRoleService;
  constructor(pariwarModel, pariwarRoleService) {
    this.pariwarModel = pariwarModel;
    this.pariwarRoleService = pariwarRoleService;
   };

  async getPariwar(customerId) {
    return this.pariwarModel.find({
      customerId: customerId,
    });
  }
  
  async createPariwar(data) {   
    const pariwar = await this.pariwarModel.create(data);    
    await this.pariwarRoleService.createPariwarRoles({
      pariwarId: pariwar._id,      
      role: 'ADMIN',
      customerId: data.customerId,    
    });

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