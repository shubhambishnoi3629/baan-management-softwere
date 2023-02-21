import { Router } from "express";
import { RelativeController } from "../controllers/relativeController.js";
import { handelError } from "../utils/errorHandler.js";


const router = Router({mergeParams: true});

router.get('/', handelError(RelativeController.getRelative));

router.post('/', handelError(RelativeController.createRelative));

router.put('/:id', handelError(RelativeController.updateRelativeById));

router.delete('/:id', handelError(RelativeController.deleteRelativeById));


export const relativeRouter = router;