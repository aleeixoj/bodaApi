import { Router } from 'express';

import { confirmRoutes } from './confirmed.routes';
import { familyRoutes } from './family.routes';
import { userRoutes } from './user.routes';

const router = Router();

router.use('/user', userRoutes);
router.use('/family', familyRoutes);
router.use('/confirm', confirmRoutes);

export { router };
