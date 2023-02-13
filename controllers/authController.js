import { customerService } from "../services/index.js";
import { jwtAuthentication } from "../utils/jwt.js";

export class AuthController {

  static async login(req, res) {
    const customer = await customerService.login(req.body.email, req.body.password);

    if (!customer) {
      res.send({
        message: 'customer not found',
      });
    } else {
      res.send({
        access_token: jwtAuthentication.createToken(customer.toJSON())
      });
    }
  }

  static async signup(req, res) {
    const customer = await customerService.createCustomer(req.body);
    res.send (customer);
  }

}