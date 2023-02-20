import { relativesService } from "../services/index.js";
import { jwtAuthentication } from "../utils/jwt.js";

export class RelativesController {

  static async getRelatives(req, res) {
    const customer = jwtAuthentication.verifyToken(req); 
    const relatives = await relativesService.getAll(
      req.params.pariwarId,
      customer._id
    );

    res.send(relatives);
  }

  static async createRelatives (req, res) {
    const customer = jwtAuthentication.verifyToken(req);  
    const relatives = await relativesService.createRelatives({
      ...req.body,
      pariwarId: req.params.pariwarId,
      customerId: customer._id,
    });

    res.send(relatives);
  }

  static async updateRelativesById(req, res) {
    const customer = jwtAuthentication.verifyToken(req);  
    const relatives = await relativesService.updateRelativesById(req.params.id, req.body, customer._id);

    res.send(relatives);
  }

  static async deleteRelativesById (req, res) {
    const customer = jwtAuthentication.verifyToken(req);  
    await relativesService.deleteRelativesById(req.params.id, customer._id);

    res.send({ success: true });
  }
}