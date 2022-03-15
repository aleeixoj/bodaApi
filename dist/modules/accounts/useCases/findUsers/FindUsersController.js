"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FindUsersController = void 0;

var _tsyringe = require("tsyringe");

var _FindUsersUseCase = require("./FindUsersUseCase");

class FindUsersController {
  async handle(request, response) {
    const findUsersUseCase = _tsyringe.container.resolve(_FindUsersUseCase.FindUsersUseCase);

    const users = await findUsersUseCase.execute();
    return response.status(201).json(users);
  }

}

exports.FindUsersController = FindUsersController;