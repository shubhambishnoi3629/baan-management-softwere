import { Router } from 'express';
import { bhaaiRouter} from './bhaaiRouter.js';
import { baanRouter } from './baanRouter.js';

const router = Router();

router.use('/bhaai', bhaaiRouter);

router.get('/search', );

router.post('/giveBaan', );

export const appRouter = router;