import { Router } from "express";
import { RelativesController } from "../controllers/relativesController.js";
import { handelError } from "../utils/errorHandler.js";


const router = Router({mergeParams: true});

router.get('/', handelError(RelativesController.getRelatives));

router.post('/', handelError(RelativesController.createRelatives));

router.put('/:id', handelError(RelativesController.updateRelativesById));

router.delete('/:id', handelError(RelativesController.deleteRelativesById));


export const relativesRouter = router;