import { pariwarRolesService } from "../services/index.js";
import { jwtAuthentication } from "../utils/jwt.js";

export class PariwarRolesController {

  static async getPariwarRoles(req, res) {
    jwtAuthentication.verifyToken(req); 
    const pariwarRoles = await pariwarRolesService.getPariwar(
      req. params.pariwarId,
    );

    res.send(pariwarRoles);
  }

  static async createPariwarRoles (req, res) {
    jwtAuthentication.verifyToken(req);  
    const pariwarRoles = await pariwarRolesService.createPariwar({
      ...req.body,
      pariwarId: req. params.pariwarId,
    });

    res.send(pariwarRoles);
  }
  
  static async updatePariwarRole (req,res) {    
    const customer = jwtAuthentication.verifyToken(req);  
    const pariwarRole = await pariwarRolesService.updatePariwarRole(req.params.id,       
      req.body, 
      customer._id);

    res.send(pariwarRole); 
  }

  static async deletePariwarRole (req, res) {
    const customer = jwtAuthentication.verifyToken(req); 
    await pariwarRolesService.deletePariwarRole(req.params.id, customer._id);

    res.send({ success: true });
  }
}