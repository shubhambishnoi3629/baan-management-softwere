import { bhaaiService } from "../services/index.js";

export class BhaaiController {

  static async getBhaai(req, res) {
    const customer = jwtAuthentication.verifyToken(req);  
    const bhaai = await bhaaiService.getAll(customer.id);

    res.send(bhaai);
  }

  static async createBhaai (req, res) {
    const customer = jwtAuthentication.verifyToken(req);  
    const bhaai = await bhaaiService.createBhaai({
      ...req.body,
      customerId: customer.id,
    });

    res.send(bhaai);
  }

  static async getBhaaiById(req, res) {
    const bhaai = await bhaaiService.getBhaaiById(req.params.id);

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