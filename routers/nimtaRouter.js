import { Router } from "express";
import { NimtaController } from "../controllers/nimtaController.js";
import { handelError } from "../utils/errorHandler.js";


const router = Router({mergeParams: true});

router.get('/', handelError(NimtaController.getNimta));

router.post('/', handelError(NimtaController.createNimta));

router.put('/:id', handelError(NimtaController.updateNimtaById));

router.delete('/:id', handelError(NimtaController.deleteNimtaById));

router.post('/:id/addRelative', handelError(NimtaController.addRelativeByIds)); 

router.delete('/:nimtaId/removeRelative/:id', handelError(NimtaController.removeRelative)); 

export const nimtaRouter = router;