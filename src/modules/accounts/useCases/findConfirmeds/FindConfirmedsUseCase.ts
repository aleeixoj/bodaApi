import { inject, injectable } from 'tsyringe';

import { IFamilyRepository } from '@modules/accounts/repositories/IFamilyRepository';
import { Family } from '@prisma/client';

@injectable()
class FindConfirmedsUseCase {
  constructor(
    @inject('FamilyRepository')
    private familyRepository: IFamilyRepository
  ) {}
  async execute(): Promise<Family[]> {
    const confirmed = await this.familyRepository.findByConfirmeds();
    return confirmed;
  }
}
export { FindConfirmedsUseCase };
