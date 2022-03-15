import { inject, injectable } from 'tsyringe';

import { IFamilyRepository } from '@modules/accounts/repositories/IFamilyRepository';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { Family, User } from '@prisma/client';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  family_id: string;
  users_id: string[];
}

@injectable()
class CreateFamilyUserUseCase {
  constructor(
    @inject('FamilyRepository')
    private familyrepository: IFamilyRepository,
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}
  async execute({ family_id, users_id }: IRequest): Promise<void> {
    const familyExists = await this.familyrepository.findById(family_id);

    if (!familyExists) {
      throw new AppError(`Family doesn't exists!`);
    }

    users_id.map(async (id) => {
      const user: any = await this.usersRepository.findById(id);
      const userFamily = await this.usersRepository.addFamily(
        family_id,
        user.id
      );
      return userFamily;
    });
  }
}
export { CreateFamilyUserUseCase };
