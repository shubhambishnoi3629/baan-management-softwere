import { pariwarRolesService, securityService } from "../services/index.js";
import { jwtAuthentication } from "../utils/jwt.js";

export class PariwarRolesController {

  static async getPariwarRoles(req, res) {
    const customer = jwtAuthentication.verifyToken(req); 
    securityService.checkUserInCustomer(customer, req.params.pariwarId);
    const pariwarRoles = await pariwarRolesService.getPariwar(
      req. params.pariwarId,
    );

    res.send(pariwarRoles);
  }

  static async createPariwarRoles (req, res) {
    const customer = jwtAuthentication.verifyToken(req);  
    securityService.checkUserInCustomer(customer, req.params.pariwarId, ['ADMIN']);
    const pariwarRoles = await pariwarRolesService.createPariwar({
      ...req.body,
      pariwarId: req. params.pariwarId,
    });

    res.send(pariwarRoles);
  }
  
  static async updatePariwarRole (req,res) {    
    const customer = jwtAuthentication.verifyToken(req);
    securityService.checkUserInCustomer(customer, req.params.pariwarId, ['ADMIN']);  
    const pariwarRole = await pariwarRolesService.updatePariwarRole(req.params.id,       
      req.body, 
      customer._id);

    res.send(pariwarRole); 
  }

  static async deletePariwarRole (req, res) {
    const customer = jwtAuthentication.verifyToken(req); 
    securityService.checkUserInCustomer(customer, req.params.pariwarId, ['ADMIN']);
    await pariwarRolesService.deletePariwarRole(req.params.id, customer._id);

    res.send({ success: true });
  }
}