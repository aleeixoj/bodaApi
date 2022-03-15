"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FamilyRepository = void 0;

var _prismaClient = require("../../../../../database/prismaClient");

class FamilyRepository {
  async create({
    name,
    access_code
  }) {
    const family = await _prismaClient.prisma.family.create({
      data: {
        name,
        access_code
      }
    });
    return family;
  }

  async addMember(family_id, users) {
    const family = await _prismaClient.prisma.family.update({
      where: {
        id: family_id
      },
      data: users
    });
    return family;
  }

  async findByName(name) {
    const family = await _prismaClient.prisma.family.findFirst({
      where: {
        name
      }
    });
    return family;
  }

  async findAll() {
    const families = await _prismaClient.prisma.family.findMany({});
    return families;
  }

  async findById(id) {
    const family = await _prismaClient.prisma.family.findUnique({
      where: {
        id
      }
    });
    return family;
  }

  async findByAccessCode(access_code) {
    const family = await _prismaClient.prisma.family.findUnique({
      where: {
        access_code
      },
      include: {
        users: true
      }
    });
    return family;
  }

  async findByfamilyId(id) {
    const familyIsConfirmed = await _prismaClient.prisma.family.findUnique({
      where: {
        id
      }
    });
    return familyIsConfirmed;
  }

}

exports.FamilyRepository = FamilyRepository;