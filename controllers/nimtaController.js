import { nimtaService } from "../services/index.js";
import { jwtAuthentication } from "../utils/jwt.js";

export class NimtaController {

  static async getNimta(req, res) {
    const customer = jwtAuthentication.verifyToken(req); 
    const nimta = await nimtaService.getAll(
      req.params.pariwarId,
      customer._id
    );

    res.send(nimta);
  }

  static async createNimta (req, res) {
    const customer = jwtAuthentication.verifyToken(req);  
    const nimta = await nimtaService.createNimta({
      ...req.body,
      nimtaId: req.params.nimtaiId,
      customerId: customer._id,
    });

    res.send(nimta);
  }

  static async updateNimtaById(req, res) {
    const customer = jwtAuthentication.verifyToken(req);  
    const nimta = await nimtaService.updateNimtaById(req.params.id, req.body, customer._id);

    res.send(nimta);
  }

  static async deleteNimtaById (req, res) {
    const customer = jwtAuthentication.verifyToken(req);  
    await nimtaService.deleteNimtaById(req.params.id, customer._id);

    res.send({ success: true });
  }
}
