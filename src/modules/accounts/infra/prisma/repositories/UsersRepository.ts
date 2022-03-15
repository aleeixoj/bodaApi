import { prisma } from '@database/prismaClient';
import { ICreateUser } from '@modules/accounts/dtos/IUser';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { User } from '@prisma/client';

class UsersRepository implements IUsersRepository {
  async findByName(name: string): Promise<User | null> {
    const user = await prisma.user.findFirst({
      where: { name },
    });
    return user;
  }
  async updateById(user_id: string, isConfirmed: boolean): Promise<User> {
    const user = await prisma.user.update({
      where: { id: user_id },
      data: {
        isConfirmed,
      },
    });
    return user;
  }
  async addFamily(family_id: string, user_id: string): Promise<User> {
    const user = await prisma.user.update({
      where: { id: user_id },
      data: { familyId: family_id },
    });
    return user;
  }
  async create({ name }: ICreateUser): Promise<User> {
    const createdUser = await prisma.user.create({
      data: {
        name,
      },
    });

    return createdUser;
  }
  async findById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    return user;
  }
  async findAll(): Promise<User[]> {
    const users = await prisma.user.findMany({});
    return users;
  }

  async findByConfirmeds(): Promise<User[]> {
    const userIsConfirmed = await prisma.user.findMany({
      where: { isConfirmed: true },
    });
    return userIsConfirmed;
  }
  async findByNotConfirmeds(): Promise<User[]> {
    const userIsConfirmed = await prisma.user.findMany({
      where: { isConfirmed: false },
    });
    return userIsConfirmed;
  }
}

export { UsersRepository };
