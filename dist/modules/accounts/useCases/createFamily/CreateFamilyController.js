"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateFamilyController = void 0;

var _tsyringe = require("tsyringe");

var _CreateFamilyUseCase = require("./CreateFamilyUseCase");

class CreateFamilyController {
  async handle(request, response) {
    const {
      name,
      access_code,
      users
    } = request.body;

    const createFamilyUseCase = _tsyringe.container.resolve(_CreateFamilyUseCase.CreateFamilyUseCase);

    const createFamily = await createFamilyUseCase.execute({
      name,
      access_code
    });
    return response.status(201).json(createFamily);
  }

}

exports.CreateFamilyController = CreateFamilyController;