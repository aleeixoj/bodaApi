import { prisma } from 'database/prismaClient';

import { ICreateUser } from '@modules/accounts/dtos/IUser';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { User } from '@prisma/client';

class UsersRepository implements IUsersRepository {
  async addFamily(family_id: string, user_id: string): Promise<User> {
    const user = await prisma.user.update({
      where: { id: user_id },
      data: { familyId: family_id },
    });
    return user;
  }
  async create({ name, phone }: ICreateUser): Promise<User> {
    const createdUser = await prisma.user.create({
      data: {
        name,
        phone,
      },
    });

    return createdUser;
  }
  async findById(id: string): Promise<User> {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    return user;
  }
  async findAll(): Promise<User[]> {
    const users = await prisma.user.findMany({});
    return users;
  }

  async findByPhone(phone: string): Promise<User | null> {
    const user = await prisma.user.findFirst({
      where: {
        phone,
      },
    });
    return user;
  }
}

export { UsersRepository };
