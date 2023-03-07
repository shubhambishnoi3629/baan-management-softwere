export class PariwarRolesService {
  pariwarRolesModel;
  customerService;

  constructor(pariwarRolesModel, customerService) {
    this.pariwarRolesModel = pariwarRolesModel;
    this.customerService = customerService;
  };

  async getPariwarRoles(pariwarId, customerId) {
    return this.pariwarRolesModel.find({
      pariwarId: pariwarId,
      customerId,
    });
  }

  async createPariwarRoles(data) {
    const pariwarRole = await this.pariwarRolesModel.create(data);
    await this.customerService.addPariwarRolesInCustomer(pariwarRole.toJSON());

    return pariwarRole;
  }

  async updatePariwarRole(id, data) {
    const pariwarRole = await  this.pariwarRolesModel.findOneAndUpdate(
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
    await this.customerService.updatePariwarRolesInCustomer(pariwarRole.toJSON());

    return pariwarRole;
  }

  async deletePariwarRole(id, customerId) {
    return  this.pariwarRolesModel.deleteOne({
      id: id,
      customerId,
    });
  }
}