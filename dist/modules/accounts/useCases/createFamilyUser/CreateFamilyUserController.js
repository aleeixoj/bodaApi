"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateFamilyUserController = void 0;

var _tsyringe = require("tsyringe");

var _CreateFamilyUserUseCase = require("./CreateFamilyUserUseCase");

class CreateFamilyUserController {
  async handle(request, response) {
    const {
      family_id,
      users_id
    } = request.body;

    const createFamilyUserUseCase = _tsyringe.container.resolve(_CreateFamilyUserUseCase.CreateFamilyUserUseCase);

    const familyUser = await createFamilyUserUseCase.execute({
      family_id,
      users_id
    });
    return response.status(201).send();
  }

}

exports.CreateFamilyUserController = CreateFamilyUserController;