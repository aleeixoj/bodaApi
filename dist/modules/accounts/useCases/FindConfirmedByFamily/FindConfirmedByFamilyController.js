"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FindConfirmedByFamilyController = void 0;

var _tsyringe = require("tsyringe");

var _FindConfirmedByFamilyUseCase = require("./FindConfirmedByFamilyUseCase");

class FindConfirmedByFamilyController {
  async handle(request, response) {
    const {
      id
    } = request.params;

    const findConfirmedByFamilyUseCase = _tsyringe.container.resolve(_FindConfirmedByFamilyUseCase.FindConfirmedByFamilyUseCase);

    const confirmeds = await findConfirmedByFamilyUseCase.execute(id);
    return response.status(200).send(confirmeds);
  }

}

exports.FindConfirmedByFamilyController = FindConfirmedByFamilyController;