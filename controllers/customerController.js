import { customerService} from "../services/index.js";

export class CustomerController {

  static async profile(req, res) {
    const profile = await customerService.getCustomerProfile(req.user._id);

    if (!profile) {
      res.status(404).send({
        message: 'No such Customer Found'
      })
    } else {
      res.send(profile);
    }
  }

  static async updateCustomer(req, res) {
    await customerService.updateCustomer(req.user._id, req.body);
    
    res.send({ success: true });
  }

  static async search(req, res) {;
    const searchFrom = req.query.email;
    const customers = await customerService.search(searchFrom);

    res.send(customers);
  }
}