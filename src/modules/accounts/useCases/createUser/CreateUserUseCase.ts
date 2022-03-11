import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { User } from '@prisma/client';
import { AppError } from '@shared/errors/AppError';

import { ICreateUser } from '../../dtos/IUser';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}
  async execute({ name, phone }: ICreateUser): Promise<User> {
    const userExists = await this.usersRepository.findByPhone(phone);

    if (userExists) {
      throw new AppError('User Already exists', 500);
    }

    const createUser = await this.usersRepository.create({
      name,
      phone,
    });

    return createUser;
  }
}
export { CreateUserUseCase };
