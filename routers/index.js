import { Router } from 'express';
import { bhaaiRouter} from './bhaaiRouter.js';
import { authRouter } from './authRouter.js';
import { BaanController } from '../controllers/baanController.js';
import { BhaaiController } from '../controllers/bhaaiController.js';
import { handelError } from '../utils/errorHandler.js';
import { pariwarRouter } from './pariwarRouter.js';
import { CustomerController } from '../controllers/customerController.js';
import { authMiddleware } from '../middleware/auth.js';

const router = Router();

router.use('/pariwar', authMiddleware, pariwarRouter);

router.use('/bhaai', authMiddleware, bhaaiRouter);

router.use('/auth', authRouter);

router.get('/customer', authMiddleware, handelError(CustomerController.search));

router.get('/profile',  authMiddleware, handelError(CustomerController.profile));

router.put('/profile',  authMiddleware, handelError(CustomerController.updateCustomer));

router.get('/baan',  authMiddleware, handelError(BaanController.getAllBaan));

router.get('/search',  authMiddleware, handelError(BaanController.searchBaan));

router.post('/giveBaan', authMiddleware, handelError(BhaaiController.giveBaan));

export const appRouter = router;