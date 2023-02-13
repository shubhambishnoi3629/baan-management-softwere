import { Router } from "express";
import { BhaaiController } from "../controllers/bhaaiController.js";
import { handelError } from "../utils/errorHandler.js";
import { baanRouter } from "./baanRouter.js";


const router = Router();

router.get('/', handelError(BhaaiController.getBhaai));

router.post('/', handelError(BhaaiController.createBhaai));

router.get('/:id', handelError(BhaaiController.getBhaaiById));

router.put('/:id', handelError(BhaaiController.updateBhaaiById));

router.delete('/:id', handelError(BhaaiController.deleteBhaaiById));

router.use('/:bhaaiId/baan', baanRouter);

export const bhaaiRouter = router;