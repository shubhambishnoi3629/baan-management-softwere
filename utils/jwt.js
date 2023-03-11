import { environment } from "../environment.js";
import jwt from "jsonwebtoken";
import { tokenManagment } from "../helper/tokenManagement.js";

class JWT {

  createToken(customer) {
    if (customer.password) {
      delete customer.password;
    }
  
    return jwt.sign(customer, environment.jwtSecret);
  }

  verifyToken(req) {
    const token = req.header("authorization");

    const verified = jwt.verify(token?.split(" ")[1], environment.jwtSecret);
    if(!verified){
      // Access Denied
      throw {
        message: "access denied",
      };
    } else {
      const { _id } = jwt.decode(token?.split(" ")[1]);
      const customerToken = tokenManagment.getToken(_id);
      if (!customerToken) {
        throw {
          message: "access denied",
        };
      }

      return jwt.decode(customerToken);
    }
  }
}

export const jwtAuthentication = new JWT();
