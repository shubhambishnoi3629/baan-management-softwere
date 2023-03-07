import { Router } from 'express';
import { bhaaiRouter} from './bhaaiRouter.js';
import { authRouter } from './authRouter.js';
import { BaanController } from '../controllers/baanController.js';
import { BhaaiController } from '../controllers/bhaaiController.js';
import { handelError } from '../utils/errorHandler.js';
import { pariwarRouter } from './pariwarRouter.js';
import { CustomerController } from '../controllers/customerController.js';

const router = Router();

router.use('/pariwar', pariwarRouter );

router.use('/bhaai', bhaaiRouter);

router.use('/auth', authRouter);

router.get('/customer', handelError(CustomerController.search));

router.get('/profile',  handelError(CustomerController.profile));

router.get('/search',  handelError(BaanController.searchBaan));

router.post('/giveBaan', handelError(BhaaiController.giveBaan));

export const appRouter = router;