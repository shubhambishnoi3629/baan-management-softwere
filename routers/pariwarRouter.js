import { Router } from "express";
import { PariwarController } from "../controllers/pariwarController.js";
import { handelError } from "../utils/errorHandler.js";



const router = Router();

router.get('/', handelError(PariwarController.getPariwar));

router.post('/', handelError(PariwarController.createPariwar));

router.put('/:id', handelError(PariwarController.updatePariwarById));

router.delete('/:id', handelError(PariwarController.deletePariwarById));

export const pariwarRouter = router;