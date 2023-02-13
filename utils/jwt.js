import { environment } from "../environment.js";
import jwt from "jsonwebtoken";

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
      return jwt.decode(token?.split(" ")[1]);
    }
  }
}

export const jwtAuthentication = new JWT();
