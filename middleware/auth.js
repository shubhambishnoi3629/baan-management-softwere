import { jwtAuthentication } from "../utils/jwt.js";

export const authMiddleware = async ( req, res, next) => {
  try {
    req.user = await jwtAuthentication.verifyToken(req);
    next();
  } catch(error) {
    res.status(400).send({
      message: error.message,
      type: 'NOT_AUTHENTICATED'
    });
  }
}