import { customerService } from "../services/index.js";
import { jwtAuthentication } from "../utils/jwt.js";
import { tokenManagment } from "../helper/tokenManagement.js";

export class AuthController {

  static async login(req, res) {
    const customer = await customerService.login(req.body.email, req.body.password);

    if (!customer) {
      res.status(404).send({
        message: 'Email and Password is not correct',
      });
    } else {
      await tokenManagment.saveToken(
        customer._id,
        jwtAuthentication.createToken(customer.toJSON())
      );
      res.send({
        access_token: jwtAuthentication.createToken({
          _id: customer._id,
        })
      });
    }
  }

  static async signup(req, res) {
    const customer = await customerService.createCustomer(req.body);
    res.send (customer);
  }

}