import { baanService } from "../services/index.js";

export class BaanController {

static async getBaan(req, res) {
  const baan = await baanService.getAll(
    req.params.bhaaiId
  );

  res.send(baan);
}

static async createBaan (req, res) {
  const baan = await baanService.createBaan({
    ...req.body,
    bhaaiId: req.params.bhaaiId,
  });

  res.send(baan);
}

static async updateBaanById(req, res) {
  const baan = await baanService.updateBaanById(req.params.id, req.body);

  res.send(baan);
}

static async deleteBaanById (req, res) {
  await baanService.deleteBaanById(req.params.id);

  res.send({ success: true });
}

static async searchBaan (req, res) {
}

static async giveBaan (req, res) {
}
}