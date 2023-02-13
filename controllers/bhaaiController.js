import { bhaaiService } from "../services/index.js";
import { jwtAuthentication } from "../utils/jwt.js";

export class BhaaiController {

  static async getBhaai(req, res) {
    const customer = jwtAuthentication.verifyToken(req);  
    const bhaai = await bhaaiService.getAll(customer._id);

    res.send(bhaai);
  }

  static async createBhaai (req, res) {
    const customer = jwtAuthentication.verifyToken(req);  
    const bhaai = await bhaaiService.createBhaai({
      ...req.body,
      customerId: customer._id,
    });

    res.send(bhaai);
  }

  static async getBhaaiById(req, res) {
    const customer = jwtAuthentication.verifyToken(req);  
    const bhaai = await bhaaiService.getBhaaiById(req.params.id, customer._id);

    res.send(bhaai);
  }

  static async updateBhaaiById(req, res) {
    const bhaai = await bhaaiService.updateBhaaiById(req.params.id, req.body);

    res.send(bhaai);
  }

  static async deleteBhaaiById (req, res) {
    await bhaaiService.deleteBhaaiById(req.params.id);

    res.send({ success: true });
  }
}