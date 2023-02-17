import { pariwarRolesService } from "../services/index.js";
import { jwtAuthentication } from "../utils/jwt.js";

export class PariwarRolesController {

  static async getPariwarRoles(req, res) {
   // const customer = jwtAuthentication.verifyToken(req); 
    const pariwarRoles = await pariwarRolesService.getPariwar(
      //customer._id
    );

    res.send(pariwarRoles);
  }

  static async createPariwarRoles (req, res) {
   // const customer = jwtAuthentication.verifyToken(req);  
    const pariwarRoles = await pariwarRolesService.createPariwar({
      ...req.body,
   // customerId: customer._id,
    });

    res.send(pariwarRoles);
  }
}