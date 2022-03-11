import { inject, injectable } from 'tsyringe';

import { IFamilyRepository } from '@modules/accounts/repositories/IFamilyRepository';
import { Family } from '@prisma/client';

@injectable()
class FindFamilyByAccessCodeUseCase {
  constructor(
    @inject('FamilyRepository')
    private familyRepository: IFamilyRepository
  ) {}
  async execute(access_code: string): Promise<Family | null> {
    const family = await this.familyRepository.findByAccessCode(access_code);
    return family;
  }
}
export { FindFamilyByAccessCodeUseCase };
