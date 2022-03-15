"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateFamilyUserUseCase = void 0;

var _tsyringe = require("tsyringe");

var _IFamilyRepository = require("../../repositories/IFamilyRepository");

var _IUsersRepository = require("../../repositories/IUsersRepository");

var _AppError = require("../../../../shared/errors/AppError");

var _dec, _dec2, _dec3, _dec4, _dec5, _class;

let CreateFamilyUserUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('FamilyRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('UsersRepository')(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _IFamilyRepository.IFamilyRepository === "undefined" ? Object : _IFamilyRepository.IFamilyRepository, typeof _IUsersRepository.IUsersRepository === "undefined" ? Object : _IUsersRepository.IUsersRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class CreateFamilyUserUseCase {
  constructor(familyrepository, usersRepository) {
    this.familyrepository = familyrepository;
    this.usersRepository = usersRepository;
  }

  async execute({
    family_id,
    users_id
  }) {
    const familyExists = await this.familyrepository.findById(family_id);

    if (!familyExists) {
      throw new _AppError.AppError(`Family doesn't exists!`);
    }

    users_id.map(async id => {
      const user = await this.usersRepository.findById(id);
      const userFamily = await this.usersRepository.addFamily(family_id, user.id);
      return userFamily;
    });
  }

}) || _class) || _class) || _class) || _class) || _class);
exports.CreateFamilyUserUseCase = CreateFamilyUserUseCase;