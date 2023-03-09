import { nimtaService, relativeService, securityService } from "../services/index.js";
import { jwtAuthentication } from "../utils/jwt.js";
import { baanService } from "../services/index.js";

export class NimtaController {

  static async getNimta(req, res) {
    const customer = jwtAuthentication.verifyToken(req); 
    securityService.checkUserInCustomer(customer, req.params.pariwarId);
    const nimta = await nimtaService.getNimta(
      req.params.pariwarId,
      customer._id
    );

    res.send(nimta);
  }

  static async createNimta(req, res) {
    const customer = jwtAuthentication.verifyToken(req);  
    securityService.checkUserInCustomer(customer, req.params.pariwarId, ['ADMIN']);
    const nimta = await nimtaService.createNimta({
      ...req.body,
      pariwarId: req.params.pariwarId,
    });

    res.send(nimta);
  }

  static async updateNimtaById(req, res) {
    const customer = jwtAuthentication.verifyToken(req);  
    securityService.checkUserInCustomer(customer, req.params.pariwarId, ['ADMIN']);
    const nimta = await nimtaService.updateNimtaById(req.params.id, req.body);

    res.send(nimta);
  }

  static async deleteNimtaById(req, res) {
    const customer = jwtAuthentication.verifyToken(req);
    securityService.checkUserInCustomer(customer, req.params.pariwarId, ['ADMIN']);  
    await nimtaService.deleteNimtaById(req.params.id);

    res.send({ success: true });
  }

  static async addRelativeByIds(req,res) {
    const customer = jwtAuthentication.verifyToken(req); 
    securityService.checkUserInCustomer(customer, req.params.pariwarId, ['ADMIN']);
    const relativeIds = req.body.relativeIds;
    const baanIds = req.body.baanIds;
    const baans = await baanService.getBaanByIds(baanIds, customer._id);
    const newRelative = await relativeService.createRelativeByBaans(baans, req.params.pariwarId);

    newRelative.forEach(relative => {
      relativeIds.push(relative._id);
    });

    const nimta = await nimtaService.addRelativeById(req.params.id, relativeIds);

    res.send(nimta);

  }

  static async removeRelative(req,res) {
    const customer = jwtAuthentication.verifyToken(req); 
    securityService.checkUserInCustomer(customer, req.params.pariwarId, ['ADMIN']);
    const nimta = await nimtaService.removeRelative(
      req.params.nimtaId,
      req.params.id,
    );

    res.send(nimta);

  }
}
