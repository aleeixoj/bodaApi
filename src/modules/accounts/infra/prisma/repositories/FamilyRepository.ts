import { prisma } from 'database/prismaClient';

import {
  IFamily,
  IFamilyRepository,
} from '@modules/accounts/repositories/IFamilyRepository';
import { Family, User } from '@prisma/client';

class FamilyRepository implements IFamilyRepository {
  async updateConfirm(id: string, isConfirmed: boolean): Promise<Family> {
    const family = await prisma.family.update({
      where: { id },
      data: { confirm: isConfirmed },
    });
    return family;
  }
  async create({ name, access_code }: IFamily): Promise<Family> {
    const family = await prisma.family.create({
      data: {
        name,
        access_code,
      },
    });
    return family;
  }
  async addMember(
    family_id: string,
    users: Promise<User | null>[]
  ): Promise<Family> {
    const family = await prisma.family.update({
      where: { id: family_id },
      data: users,
    });
    return family;
  }
  async findByName(name: string): Promise<Family | null> {
    const family = await prisma.family.findFirst({ where: { name } });
    return family;
  }
  async findAll(): Promise<Family[]> {
    const families = await prisma.family.findMany({});

    return families;
  }
  async findById(id: string): Promise<Family | null> {
    const family = await prisma.family.findUnique({ where: { id } });
    return family;
  }
  async findByAccessCode(access_code: string): Promise<Family | null> {
    const family = await prisma.family.findUnique({
      where: { access_code },
      include: { users: true },
    });
    return family;
  }

  async findByfamilyId(id: string): Promise<Family | null> {
    const familyIsConfirmed = await prisma.family.findFirst({
      where: { id },
    });
    return familyIsConfirmed;
  }
  async findByConfirmeds(): Promise<Family[]> {
    const familyIsConfirmed = await prisma.family.findMany({
      where: { confirm: true },
    });
    return familyIsConfirmed;
  }
  async findByNotConfirmeds(): Promise<Family[]> {
    const familyIsConfirmed = await prisma.family.findMany({
      where: { confirm: false },
    });
    return familyIsConfirmed;
  }
}

export { FamilyRepository };
