import { inject, injectable } from 'tsyringe';

import { IFamilyRepository } from '@modules/accounts/repositories/IFamilyRepository';
import { Family } from '@prisma/client';
import { AppError } from '@shared/errors/AppError';

@injectable()
class FindFamilyByAccessCodeUseCase {
  constructor(
    @inject('FamilyRepository')
    private familyRepository: IFamilyRepository
  ) {}
  async execute(access_code: string): Promise<Family | null> {
    const family = await this.familyRepository.findByAccessCode(access_code);

    if (!family) {
      throw new AppError('O código digitado está incorreto!');
    }
    return family;
  }
}
export { FindFamilyByAccessCodeUseCase };
