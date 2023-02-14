import { Router } from 'express';
import { bhaaiRouter} from './bhaaiRouter.js';
import { authRouter } from './authRouter.js';
import { BaanController } from '../controllers/baanController.js';
import { BhaaiController } from '../controllers/bhaaiController.js';
import { handelError } from '../utils/errorHandler.js';

const router = Router();

router.use('/bhaai', bhaaiRouter);

router.get('/search',  handelError(BaanController.searchBaan));

router.post('/giveBaan', handelError(BhaaiController.giveBaan) );

router.use('/auth', authRouter);

export const appRouter = router;