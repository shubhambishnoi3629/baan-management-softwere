import { pariwarRolesService, securityService } from "../services/index.js";

export class PariwarRolesController {

  static async getPariwarRoles(req, res) {
    securityService.checkUserInCustomer(req.user, req.params.pariwarId);
    const pariwarRoles = await pariwarRolesService.getPariwar(
      req. params.pariwarId,
    );

    res.send(pariwarRoles);
  }

  static async createPariwarRoles (req, res) {
    securityService.checkUserInCustomer(req.user, req.params.pariwarId, ['ADMIN']);
    const pariwarRoles = await pariwarRolesService.createPariwar({
      ...req.body,
      pariwarId: req. params.pariwarId,
    });

    res.send(pariwarRoles);
  }
  
  static async updatePariwarRole (req,res) {    
    securityService.checkUserInCustomer(req.user, req.params.pariwarId, ['ADMIN']);  
    const pariwarRole = await pariwarRolesService.updatePariwarRole(req.params.id,       
      req.body, 
      req.user._id);

    res.send(pariwarRole); 
  }

  static async deletePariwarRole (req, res) {
    securityService.checkUserInCustomer(req.user, req.params.pariwarId, ['ADMIN']);
    await pariwarRolesService.deletePariwarRole(req.params.id, req.user._id);

    res.send({ success: true });
  }
}