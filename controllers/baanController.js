import { baanService } from "../services/index.js";
import { jwtAuthentication } from "../utils/jwt.js";

export class BaanController {

  static async getBaan(req, res) {
    const customer = jwtAuthentication.verifyToken(req); 
    const baan = await baanService.getAll(
      req.params.bhaaiId,
      customer._id
    );

    res.send(baan);
  }

  static async createBaan (req, res) {
    const customer = jwtAuthentication.verifyToken(req);  
    const baan = await baanService.createBaan({
      ...req.body,
      bhaaiId: req.params.bhaaiId,
      customerId: customer._id,
    });

    res.send(baan);
  }

  static async updateBaanById(req, res) {
    const customer = jwtAuthentication.verifyToken(req);  
    const baan = await baanService.updateBaanById(req.params.id, req.body, customer._id);

    res.send(baan);
  }

  static async deleteBaanById (req, res) {
    const customer = jwtAuthentication.verifyToken(req);  
    await baanService.deleteBaanById(req.params.id, customer._id);

    res.send({ success: true });
  }

  static async searchBaan (req, res) {
    const customer = jwtAuthentication.verifyToken(req);
    const searchBy = req.query.searchBy;
    const baanList = await baanService.search(customer._id, searchBy);
    
    res.send(baanList);
  }
  
}