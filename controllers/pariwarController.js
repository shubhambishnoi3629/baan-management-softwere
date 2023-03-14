import { pariwarService, securityService } from "../services/index.js";

export class PariwarController {

  static async getPariwar(req, res) {
    const pariwar = await pariwarService.getPariwar(req.user._id);

    res.send(pariwar);
  }

  static async createPariwar (req, res) {
    const pariwar = await pariwarService.createPariwar({
      ...req.body,
      customerId: req.user._id,
    });

    res.send(pariwar);
  }

  static async updatePariwarById(req, res) {
    securityService.checkUserInCustomer(req.user, req.params.id, ['ADMIN']);
    const pariwar = await pariwarService.updatePariwarById(req.params.id, req.body);

    res.send(pariwar);
  }

  static async deletePariwarById(req, res) {
    securityService.checkUserInCustomer(req.user, req.params.id, ['ADMIN']);
    await pariwarService.deletePariwarById(req.params.id);
    
    res.send({ success: true });
  }
}