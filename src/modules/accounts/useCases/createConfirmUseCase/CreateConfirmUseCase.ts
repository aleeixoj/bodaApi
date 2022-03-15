import { inject, injectable } from 'tsyringe';

import { IFamilyRepository } from '@modules/accounts/repositories/IFamilyRepository';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { Family, User } from '@prisma/client';

interface IData {
  id: string;
  status: boolean;
}

interface IRequest {
  access_code: string;
  data: IData[];
}
@injectable()
class CreateConfirmUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}
  async execute({ access_code, data }: IRequest): Promise<User> {
    const userConfirmed = data.map(async (item) => {
      const user = await this.usersRepository.updateById(item.id, item.status);
      return user;
    });

    return userConfirmed;
  }
}
export { CreateConfirmUseCase };
