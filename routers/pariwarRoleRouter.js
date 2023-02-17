import {Router} from 'express';
import { PariwarRolesController } from '../controllers/pariwarRolesController.js';
import { handelError } from '../utils/errorHandler.js';

const router = Router({mergeParams: true});

router.get('/', handelError(PariwarRolesController.getPariwarRoles));

router.post('/', handelError(PariwarRolesController.createPariwarRoles));



export const pariwarRolesRouter = router;