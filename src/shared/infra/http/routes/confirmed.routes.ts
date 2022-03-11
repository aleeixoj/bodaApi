import { Router } from 'express';

import { CreateConfirmController } from '@modules/accounts/useCases/createConfirmUseCase/CreateConfirmController';
import { FindConfirmedByFamilyController } from '@modules/accounts/useCases/FindConfirmedByFamily/FindConfirmedByFamilyController';
import { FindConfirmedsController } from '@modules/accounts/useCases/findConfirmeds/FindConfirmedsController';
import { FindNotConfirmedsController } from '@modules/accounts/useCases/findNotConfirmeds /FindNotConfirmedsController';

const confirmRoutes = Router();

const createConfirmController = new CreateConfirmController();
const findConfirmedsController = new FindConfirmedsController();
const findNotConfirmedsController = new FindNotConfirmedsController();
const findConfirmedByFamilyController = new FindConfirmedByFamilyController();

confirmRoutes.post('/create/:id', createConfirmController.handle);
confirmRoutes.get('', findConfirmedsController.handle);
confirmRoutes.get('/not', findNotConfirmedsController.handle);
confirmRoutes.get('/:id', findConfirmedByFamilyController.handle);

export { confirmRoutes };
