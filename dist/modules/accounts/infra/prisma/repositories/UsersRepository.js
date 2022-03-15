"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersRepository = void 0;

var _prismaClient = require("../../../../../database/prismaClient");

class UsersRepository {
  async findByName(name) {
    const user = await _prismaClient.prisma.user.findFirst({
      where: {
        name
      }
    });
    return user;
  }

  async updateById(user_id, isConfirmed) {
    const user = await _prismaClient.prisma.user.update({
      where: {
        id: user_id
      },
      data: {
        isConfirmed
      }
    });
    return user;
  }

  async addFamily(family_id, user_id) {
    const user = await _prismaClient.prisma.user.update({
      where: {
        id: user_id
      },
      data: {
        familyId: family_id
      }
    });
    return user;
  }

  async create({
    name
  }) {
    const createdUser = await _prismaClient.prisma.user.create({
      data: {
        name
      }
    });
    return createdUser;
  }

  async findById(id) {
    const user = await _prismaClient.prisma.user.findUnique({
      where: {
        id
      }
    });
    return user;
  }

  async findAll() {
    const users = await _prismaClient.prisma.user.findMany({});
    return users;
  }

  async findByConfirmeds() {
    const userIsConfirmed = await _prismaClient.prisma.user.findMany({
      where: {
        isConfirmed: true
      }
    });
    return userIsConfirmed;
  }

  async findByNotConfirmeds() {
    const userIsConfirmed = await _prismaClient.prisma.user.findMany({
      where: {
        isConfirmed: false
      }
    });
    return userIsConfirmed;
  }

}

exports.UsersRepository = UsersRepository;