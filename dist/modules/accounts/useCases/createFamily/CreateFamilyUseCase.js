"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateFamilyUseCase = void 0;

var _tsyringe = require("tsyringe");

var _IFamilyRepository = require("../../repositories/IFamilyRepository");

var _IUsersRepository = require("../../repositories/IUsersRepository");

var _AppError = require("../../../../shared/errors/AppError");

var _dec, _dec2, _dec3, _dec4, _dec5, _class;

let CreateFamilyUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('UsersRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('FamilyRepository')(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _IUsersRepository.IUsersRepository === "undefined" ? Object : _IUsersRepository.IUsersRepository, typeof _IFamilyRepository.IFamilyRepository === "undefined" ? Object : _IFamilyRepository.IFamilyRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class CreateFamilyUseCase {
  constructor(usersRepository, familyRepository) {
    this.usersRepository = usersRepository;
    this.familyRepository = familyRepository;
  }

  async execute({
    name,
    access_code
  }) {
    const familyAlreadyExists = await this.familyRepository.findByName(name);

    if (familyAlreadyExists) {
      throw new _AppError.AppError('This family already exists!');
    }

    const accessCodeAlreadyUsed = await this.familyRepository.findByAccessCode(access_code);

    if (accessCodeAlreadyUsed) {
      throw new _AppError.AppError('This access code already used!');
    }

    const createFamily = await this.familyRepository.create({
      name,
      access_code
    });
    return createFamily;
  }

}) || _class) || _class) || _class) || _class) || _class);
exports.CreateFamilyUseCase = CreateFamilyUseCase;