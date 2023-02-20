import { Router } from "express";
import { handelError } from "../utils/errorHandler.js";
import { CustomerController } from "../controllers/customerController.js";


const router = Router();

router.get('/', handelError(CustomerController.search));

export const customerRouter = router;