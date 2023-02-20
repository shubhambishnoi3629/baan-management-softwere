import { customerService} from "../services/index.js";
import { jwtAuthentication } from "../utils/jwt.js";

export class CustomerController {

  static async search(req, res) {
    jwtAuthentication.verifyToken(req);
    const searchFrom = req.query.email;
    const customers = await customerService.search(searchFrom);

    res.send(customers);
  }
}