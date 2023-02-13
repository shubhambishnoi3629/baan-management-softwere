import { Router } from "express";
import { BaanController } from "../controllers/baanController.js";
import { handelError } from "../utils/errorHandler.js";


const router = Router({mergeParams: true});

router.get('/', handelError(BaanController.getBaan));

router.post('/', handelError(BaanController.createBaan));

router.put('/:id', handelError(BaanController.updateBaanById));

router.delete('/:id', handelError(BaanController.deleteBaanById));

export const baanRouter = router;