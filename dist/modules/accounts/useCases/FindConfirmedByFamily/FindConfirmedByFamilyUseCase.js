"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FindConfirmedByFamilyUseCase = void 0;

var _tsyringe = require("tsyringe");

var _IFamilyRepository = require("../../repositories/IFamilyRepository");

var _dec, _dec2, _dec3, _dec4, _class;

let FindConfirmedByFamilyUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('FamilyRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IFamilyRepository.IFamilyRepository === "undefined" ? Object : _IFamilyRepository.IFamilyRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class FindConfirmedByFamilyUseCase {
  constructor(familyRepository) {
    this.familyRepository = familyRepository;
  }

  async execute(id) {
    const confirmed = await this.familyRepository.findByfamilyId(id);
    return confirmed;
  }

}) || _class) || _class) || _class) || _class);
exports.FindConfirmedByFamilyUseCase = FindConfirmedByFamilyUseCase;