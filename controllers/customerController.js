import { customerService} from "../services/index.js";
import { jwtAuthentication } from "../utils/jwt.js";

export class CustomerController {

  static async profile(req, res) {
    const customer = jwtAuthentication.verifyToken(req);
    const profile = await customerService.getCustomerProfile(customer._id);

    if (!profile) {
      res.status(404).send({
        message: 'No such Customer Found'
      })
    } else {
      res.send(profile);
    }
  }

  static async search(req, res) {
    jwtAuthentication.verifyToken(req);
    const searchFrom = req.query.email;
    const customers = await customerService.search(searchFrom);

    res.send(customers);
  }
}