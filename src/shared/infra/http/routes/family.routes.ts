import { Router } from 'express';

import { CreateFamilyController } from '@modules/accounts/useCases/createFamily/CreateFamilyController';
import { CreateFamilyUserController } from '@modules/accounts/useCases/createFamilyUser/CreateFamilyUserController';
import { FindFamilyByAccessCodeController } from '@modules/accounts/useCases/findFamilyByAccessCode/FindFamilyByAccessCodeController';

const familyRoutes = Router();

const createFamilyController = new CreateFamilyController();
const createFamilyUserController = new CreateFamilyUserController();
const findFamilyByAccessCodeController = new FindFamilyByAccessCodeController();

familyRoutes.post('/create', createFamilyController.handle);
familyRoutes.post('/addUser', createFamilyUserController.handle);
familyRoutes.get('/', findFamilyByAccessCodeController.handle);

export { familyRoutes };
