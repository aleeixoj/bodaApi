import { inject, injectable } from 'tsyringe';

import { IFamilyRepository } from '@modules/accounts/repositories/IFamilyRepository';
import { Family } from '@prisma/client';

@injectable()
class FindConfirmedByFamilyUseCase {
  constructor(
    @inject('FamilyRepository')
    private familyRepository: IFamilyRepository
  ) {}
  async execute(id: string): Promise<Family | null> {
    const confirmed = await this.familyRepository.findByfamilyId(id);
    return confirmed;
  }
}
export { FindConfirmedByFamilyUseCase };
