import { inject, injectable } from 'tsyringe';

import { IFamilyRepository } from '@modules/accounts/repositories/IFamilyRepository';
import { Family } from '@prisma/client';

@injectable()
class FindNotConfirmedsUseCase {
  constructor(
    @inject('FamilyRepository')
    private familyRepository: IFamilyRepository
  ) {}
  async execute(): Promise<Family[]> {
    const confirmed = await this.familyRepository.findByNotConfirmeds();
    return confirmed;
  }
}
export { FindNotConfirmedsUseCase };
