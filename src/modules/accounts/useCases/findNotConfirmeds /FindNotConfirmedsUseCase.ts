import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { User } from '@prisma/client';

@injectable()
class FindNotConfirmedsUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}
  async execute(): Promise<User[]> {
    const confirmed = await this.usersRepository.findByNotConfirmeds();
    return confirmed;
  }
}
export { FindNotConfirmedsUseCase };
