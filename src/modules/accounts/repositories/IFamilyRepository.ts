import { Family, User } from '@prisma/client';

export interface IFamily {
  name: string;
  access_code: string;
}

interface IFamilyRepository {
  create(data: IFamily): Promise<Family>;
  addMember(family_id: string, users: Promise<User | null>[]): Promise<Family>;
  findAll(): Promise<Family[]>;
  findById(id: string): Promise<Family | null>;
  findByAccessCode(access_code: string): Promise<Family | null>;
  findByName(name: string): Promise<Family | null>;
  updateConfirm(id: string, isConfirmed: boolean): Promise<Family>;
  findByfamilyId(id: string): Promise<Family | null>;
  findByConfirmeds(): Promise<Family[]>;
  findByNotConfirmeds(): Promise<Family[]>;
}

export { IFamilyRepository };