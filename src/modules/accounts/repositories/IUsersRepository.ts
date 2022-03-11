import { User } from '@prisma/client';

import { ICreateUser } from '../dtos/IUser';

interface IUsersRepository {
  create(data: ICreateUser): Promise<User>;
  findById(id: string): Promise<User>;
  findAll(): Promise<User[]>;
  findByPhone(phone: string): Promise<User | null>;
  addFamily(family_id: string, user_id: string): Promise<User>;
}

export { IUsersRepository };
