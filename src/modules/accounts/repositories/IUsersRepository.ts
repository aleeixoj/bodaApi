import { User } from '@prisma/client';

import { ICreateUser } from '../dtos/IUser';

interface IUsersRepository {
  create(data: ICreateUser): Promise<User>;
  findById(id: string): Promise<User | null>;
  findByName(name: string): Promise<User | null>;
  findAll(): Promise<User[]>;
  updateById(user_id: string, isConfirmed: boolean): Promise<User>;
  addFamily(family_id: string, user_id: string): Promise<User>;
  findByConfirmeds(): Promise<User[]>;
  findByNotConfirmeds(): Promise<User[]>;
}

export { IUsersRepository };
