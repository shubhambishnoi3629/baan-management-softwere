export class PariwarRolesService {
  pariwarRolesModel;
  constructor(pariwarRolesModel) {
    this.pariwarRolesModel = pariwarRolesModel
   };

  async getPariwarRoles(pariwarId, customerId) {
    return this.pariwarRolesModel.find({
      pariwarId: pariwarId,
      customerId,
    });
  }

  async createPariwarRoles(data) {
    const pariwarRoles = await this.pariwarRolesModel.create(data);

    return pariwarRoles;
  }
}