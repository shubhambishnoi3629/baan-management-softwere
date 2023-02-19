import { pariwarService } from "../services/index.js";
import { jwtAuthentication } from "../utils/jwt.js";

export class PariwarController {

  static async getPariwar(req, res) {
   // const customer = jwtAuthentication.verifyToken(req);  
    const pariwar = await pariwarService.getPariwar(customer._id);

    res.send(pariwar);
  }

  static async createPariwar (req, res) {
    const customer = jwtAuthentication.verifyToken(req);  
    const pariwar = await pariwarService.createPariwar({
      ...req.body,
     customerId: customer._id,
    });

    res.send(pariwar);
  }

  static async updatePariwarById(req, res) {
    const pariwar = await pariwarService.updatePariwarById(req.params.id, req.body);

    res.send(pariwar);
  }

  static async deletePariwarById(req, res) {
    await pariwarService.deletePariwarById(req.params.id);

    res.send({ success: true });
  }
}