import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';

interface IData {
  id: string;
  status: boolean;
}

interface IRequest {
  data: IData[];
}
@injectable()
class CreateConfirmUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}
  async execute({ data }: IRequest): Promise<any> {
    const userConfirmed = data.map(async (item) => {
      const user = await this.usersRepository.updateById(item.id, item.status);
      return user;
    });

    return userConfirmed;
  }
}
export { CreateConfirmUseCase };
