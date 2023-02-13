import { Router } from "express";
import { handelError } from "../utils/errorHandler.js";
import { AuthController } from "../controllers/authController.js";

const router = Router();

router.post('/login', handelError(AuthController.login));

router.post('/signup', handelError(AuthController.signup));


export const authRouter = router ;