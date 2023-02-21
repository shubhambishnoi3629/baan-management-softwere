import { relativeService } from "../services/index.js";
import { jwtAuthentication } from "../utils/jwt.js";

export class RelativeController {

  static async getRelative(req, res) {
    const customer = jwtAuthentication.verifyToken(req); 
    const relative = await relativeService.getAll(
      req.params.pariwarId,
      customer._id
    );

    res.send(relative);
  }

  static async createRelative (req, res) {
    const customer = jwtAuthentication.verifyToken(req);  
    const relative = await relativeService.createRelative({
      ...req.body,
      pariwarId: req.params.pariwarId,
      customerId: customer._id,
    });

    res.send(relative);
  }

  static async updateRelativeById(req, res) {
    const customer = jwtAuthentication.verifyToken(req);  
    const relative = await relativeService.updateRelativeById(req.params.id, req.body, customer._id);

    res.send(relative);
  }

  static async deleteRelativeById (req, res) {
    const customer = jwtAuthentication.verifyToken(req);  
    await relativeService.deleteRelativeById(req.params.id, customer._id);

    res.send({ success: true });
  }
}