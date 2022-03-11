import { inject, injectable } from 'tsyringe';

import { ICreateFamily } from '@modules/accounts/dtos/IFamily';
import { IFamilyRepository } from '@modules/accounts/repositories/IFamilyRepository';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { Family } from '@prisma/client';
import { AppError } from '@shared/errors/AppError';

@injectable()
class CreateFamilyUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('FamilyRepository')
    private familyRepository: IFamilyRepository
  ) {}
  async execute({ name, access_code }: ICreateFamily): Promise<Family> {
    const familyAlreadyExists = await this.familyRepository.findByName(name);

    if (familyAlreadyExists) {
      throw new AppError('This family already exists!');
    }
    const accessCodeAlreadyUsed = await this.familyRepository.findByAccessCode(
      access_code
    );

    if (accessCodeAlreadyUsed) {
      throw new AppError('This access code already used!');
    }

    const createFamily = await this.familyRepository.create({
      name,
      access_code,
    });

    return createFamily;
  }
}
export { CreateFamilyUseCase };
