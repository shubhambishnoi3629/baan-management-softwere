import { Router } from "express";
import { NimtaController } from "../controllers/nimtaController.js";
import { handelError } from "../utils/errorHandler.js";


const router = Router({mergeParams: true});

router.get('/', handelError(NimtaController.getNimta));

router.post('/', handelError(NimtaController.createNimta));

router.put('/:id', handelError(NimtaController.updateNimtaById));

router.delete('/:id', handelError(NimtaController.deleteNimtaById));

router.post('/:id/addrelative', handelError(NimtaController.addRelativeByIds)); //pending

export const nimtaRouter = router;