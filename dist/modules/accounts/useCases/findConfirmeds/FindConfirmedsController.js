"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FindConfirmedsController = void 0;

var _tsyringe = require("tsyringe");

var _FindConfirmedsUseCase = require("./FindConfirmedsUseCase");

class FindConfirmedsController {
  async handle(request, response) {
    const findConfirmedsUseCase = _tsyringe.container.resolve(_FindConfirmedsUseCase.FindConfirmedsUseCase);

    const confirmeds = await findConfirmedsUseCase.execute();
    return response.status(200).send(confirmeds);
  }

}

exports.FindConfirmedsController = FindConfirmedsController;