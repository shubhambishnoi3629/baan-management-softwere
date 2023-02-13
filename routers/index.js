import { Router } from 'express';
import { bhaaiRouter} from './bhaaiRouter.js';
import { baanRouter } from './baanRouter.js';
import { authRouter } from './authRouter.js';

const router = Router();

router.use('/bhaai', bhaaiRouter);

router.get('/search', );

router.post('/giveBaan', );

router.use('/auth', authRouter);

export const appRouter = router;