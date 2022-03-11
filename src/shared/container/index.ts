import { container } from 'tsyringe';
import '@shared/container/providers';

import { FamilyRepository } from '@modules/accounts/infra/prisma/repositories/FamilyRepository';
import { UsersRepository } from '@modules/accounts/infra/prisma/repositories/UsersRepository';
import { IFamilyRepository } from '@modules/accounts/repositories/IFamilyRepository';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<IFamilyRepository>(
  'FamilyRepository',
  FamilyRepository
);
