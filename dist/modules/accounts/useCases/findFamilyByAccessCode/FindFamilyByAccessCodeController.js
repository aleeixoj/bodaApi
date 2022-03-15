"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FindFamilyByAccessCodeController = void 0;

var _tsyringe = require("tsyringe");

var _FindFamilyByAccessCodeUseCase = require("./FindFamilyByAccessCodeUseCase");

class FindFamilyByAccessCodeController {
  async handle(request, response) {
    const code = request.headers.access_code;

    const findFamilyByAccessCodeUseCase = _tsyringe.container.resolve(_FindFamilyByAccessCodeUseCase.FindFamilyByAccessCodeUseCase);

    const family = await findFamilyByAccessCodeUseCase.execute(code);
    return response.status(200).json(family);
  }

}

exports.FindFamilyByAccessCodeController = FindFamilyByAccessCodeController;