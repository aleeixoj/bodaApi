"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FindNotConfirmedsController = void 0;

var _tsyringe = require("tsyringe");

var _FindNotConfirmedsUseCase = require("./FindNotConfirmedsUseCase");

class FindNotConfirmedsController {
  async handle(request, response) {
    const findNotConfirmedsUseCase = _tsyringe.container.resolve(_FindNotConfirmedsUseCase.FindNotConfirmedsUseCase);

    const confirmeds = await findNotConfirmedsUseCase.execute();
    return response.status(200).send(confirmeds);
  }

}

exports.FindNotConfirmedsController = FindNotConfirmedsController;