"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateConfirmController = void 0;

var _tsyringe = require("tsyringe");

var _CreateConfirmUseCase = require("./CreateConfirmUseCase");

class CreateConfirmController {
  async handle(request, response) {
    const {
      access_code
    } = request.params;
    const {
      data
    } = request.body;

    const createConfirmUseCase = _tsyringe.container.resolve(_CreateConfirmUseCase.CreateConfirmUseCase);

    const confirmed = await createConfirmUseCase.execute({
      access_code,
      data
    });
    return response.status(201).json({
      data: confirmed,
      message: 'sucess'
    });
  }

}

exports.CreateConfirmController = CreateConfirmController;