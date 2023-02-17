import { PariwarRolesModel } from "../models/pariwarRolesModel.js";

export class PariwarRolesService {
  
  constructor() { };

  async getPariwarRoles(pariwarId, customerId) {
    return PariwarRolesModel.find({
      pariwarId: pariwarId,
      customerId,
    });
  }

  async createPariwarRoles(data) {
    const pariwarRoles = await PariwarRolesModel.create(data);

    return pariwarRoles;
  }
}