import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { User } from '@prisma/client';

@injectable()
class FindConfirmedsUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}
  async execute(): Promise<User[]> {
    const confirmed = await this.usersRepository.findByConfirmeds();
    return confirmed;
  }
}
export { FindConfirmedsUseCase };
