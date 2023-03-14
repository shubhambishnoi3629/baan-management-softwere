import { baanService } from "../services/index.js";

export class BaanController {

  static async getAllBaan(req, res) {
    const baan = await baanService.getAll(
      req.user._id
    );

    res.send(baan);
  }

  static async getBaan(req, res) {
    const baan = await baanService.getBaan(
      req.params.bhaaiId,
      req.user._id
    );

    res.send(baan);
  }

  static async createBaan (req, res) {
    const baan = await baanService.createBaan({
      ...req.body,
      bhaaiId: req.params.bhaaiId,
      customerId: req.user._id,
    });

    res.send(baan);
  }

  static async updateBaanById(req, res) {
    const baan = await baanService.updateBaanById(req.params.id, req.body, req.user._id);

    res.send(baan);
  }

  static async deleteBaanById (req, res) {
    await baanService.deleteBaanById(req.params.id, req.user._id);

    res.send({ success: true });
  }

  static async searchBaan (req, res) {
    const searchBy = req.query.searchBy;
    const baanList = await baanService.search(req.user._id, searchBy);
    
    res.send(baanList);
  }
  
}