import { inject, injectable } from 'tsyringe';

import { IFamilyRepository } from '@modules/accounts/repositories/IFamilyRepository';
import { Family } from '@prisma/client';

interface IRequest {
  id: string;
  isConfirmed: boolean;
}
@injectable()
class CreateConfirmUseCase {
  constructor(
    @inject('FamilyRepository')
    private familyRepository: IFamilyRepository
  ) {}
  async execute({ id, isConfirmed }: IRequest): Promise<Family> {
    const familyConfirmed = await this.familyRepository.updateConfirm(
      id,
      isConfirmed
    );
    return familyConfirmed;
  }
}
export { CreateConfirmUseCase };
