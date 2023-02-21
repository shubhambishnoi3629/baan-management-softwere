import { nimtaService, relativeService } from "../services/index.js";
import { jwtAuthentication } from "../utils/jwt.js";
import { baanService } from "../services/index.js";


export class NimtaController {

  static async getNimta(req, res) {
    const customer = jwtAuthentication.verifyToken(req); 
    const nimta = await nimtaService.getNimta(
      req.params.pariwarId,
      customer._id
    );

    res.send(nimta);
  }

  static async createNimta (req, res) {
    const customer = jwtAuthentication.verifyToken(req);  
    const nimta = await nimtaService.createNimta({
      ...req.body,
      customerId: customer._id,
    });

    res.send(nimta);
  }

  static async updateNimtaById(req, res) {
    const customer = jwtAuthentication.verifyToken(req);  
    const nimta = await nimtaService.updateNimtaById(req.params.id, req.body, customer._id);

    res.send(nimta);
  }

  static async deleteNimtaById(req, res) {
    const customer = jwtAuthentication.verifyToken(req);  
    await nimtaService.deleteNimtaById(req.params.id, customer._id);

    res.send({ success: true });
  }

  static async addRelativeByIds(req,res) {
    const customer = jwtAuthentication.verifyToken(req); 
    const relativeIds = req.body.relativeIds;
    const baanIds = req.body.baanIds;
    const baans = await baanService.getBaanByIds(baanIds);
    const newRelative = await relativeService.createRelativeByBaans(baans, req.params.pariwarId, customer._id);

    newRelative.forEach(relative => {
      relativeIds.push(relative._id);
    });

    const nimta = await nimtaService.addRelativeById(req.params.id, relativeIds);

    res.send(nimta);

  }
}
