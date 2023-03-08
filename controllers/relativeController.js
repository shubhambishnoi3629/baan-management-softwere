import { relativeService, securityService } from "../services/index.js";
import { jwtAuthentication } from "../utils/jwt.js";

export class RelativeController {

  static async getRelative(req, res) {
    const customer = jwtAuthentication.verifyToken(req); 
    securityService.checkUserInCustomer(customer, req.params.pariwarId);
    const relative = await relativeService.getAll(
      req.params.pariwarId,
    );

    res.send(relative);
  }

  static async createRelative (req, res) {
    const customer = jwtAuthentication.verifyToken(req); 
    securityService.checkUserInCustomer(customer, req.params.pariwarId, ['ADMIN']); 
    const relative = await relativeService.createRelative({
      ...req.body,
      pariwarId: req.params.pariwarId,
    });

    res.send(relative);
  }

  static async updateRelativeById(req, res) {
    const customer = jwtAuthentication.verifyToken(req);  
   securityService.checkUserInCustomer(customer, req.params.pariwarId, ['ADMIN']);
    const relative = await relativeService.updateRelativeById(req.params.id, req.body);

    res.send(relative);
  }

  static async deleteRelativeById (req, res) {
    const customer = jwtAuthentication.verifyToken(req);  
    securityService.checkUserInCustomer(customer, req.params.pariwarId, ['ADMIN']);
    await relativeService.deleteRelativeById(req.params.id);

    res.send({ success: true });
  }
}