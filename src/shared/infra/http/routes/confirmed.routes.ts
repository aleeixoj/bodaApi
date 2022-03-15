import { Router } from 'express';

import { CreateConfirmController } from '@modules/accounts/useCases/createConfirmUseCase/CreateConfirmController';
import { FindConfirmedByFamilyController } from '@modules/accounts/useCases/FindConfirmedByFamily/FindConfirmedByFamilyController';
import { FindConfirmedsController } from '@modules/accounts/useCases/findConfirmeds/FindConfirmedsController';
import { FindFamilyByAccessCodeController } from '@modules/accounts/useCases/findFamilyByAccessCode/FindFamilyByAccessCodeController';
import { FindNotConfirmedsController } from '@modules/accounts/useCases/findNotConfirmeds /FindNotConfirmedsController';

const confirmRoutes = Router();

const createConfirmController = new CreateConfirmController();
const findConfirmedsController = new FindConfirmedsController();
const findNotConfirmedsController = new FindNotConfirmedsController();
const findConfirmedByFamilyController = new FindConfirmedByFamilyController();
const findFamilyByAccessCodeController = new FindFamilyByAccessCodeController();

confirmRoutes.post('/create/:access_code', createConfirmController.handle);
confirmRoutes.get('', findConfirmedsController.handle);
confirmRoutes.get('/not', findNotConfirmedsController.handle);
confirmRoutes.get('/family/:id', findConfirmedByFamilyController.handle);
confirmRoutes.get(
  '/code/:access_code',
  findFamilyByAccessCodeController.handle
);

export { confirmRoutes };
