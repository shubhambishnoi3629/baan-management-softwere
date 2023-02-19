import { baanService, bhaaiService } from "../services/index.js";
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
    const isTotal = req.query.total;
    const bhaai = await bhaaiService.getBhaaiById(req.params.id, customer._id);
  
    res.send({
      ...bhaai.toJSON(),
      total: isTotal == 1 ? await baanService.getTotalAmount(req.params.id, customer._id) : 0
    });
  }

  static async updateBhaaiById(req, res) {
    const bhaai = await bhaaiService.updateBhaaiById(req.params.id, req.body);

    res.send(bhaai);
  }

  static async deleteBhaaiById(req, res) {
    await bhaaiService.deleteBhaaiById(req.params.id);
    await bhaaiService.deleteAllBaanByBhaaiId(req.params.id);
    res.send({ success: true });
  }

  static async giveBaan (req, res) {
    const customer = jwtAuthentication.verifyToken(req); 
    const bhaai = await bhaaiService.getOrCreateBhaai("BAAN GIVEN", customer._id);
    const baan = await baanService.getBaanById(req.body.baanId, customer._id );
    const newBaan = await baanService.createBaan({
      firstName: baan.firstName,
      lastName: baan.lastName,
      fathersName: baan.fathersName,
      address: baan.address,
      nickName: baan.nickName,
      bhaaiId: bhaai._id,
      amount: -req.body.amount,
      customerId: customer._id
    });

    res.send(newBaan);
  }
}