import { Router } from 'express';

import { CreateUserController } from '@modules/accounts/useCases/createUser/CreateUserController';
import { FindUsersController } from '@modules/accounts/useCases/findUsers/FindUsersController';

const userRoutes = Router();

const createUserController = new CreateUserController();
const findUsersController = new FindUsersController();

userRoutes.post('/create', createUserController.handle);
userRoutes.get('/getAll', findUsersController.handle);

export { userRoutes };
