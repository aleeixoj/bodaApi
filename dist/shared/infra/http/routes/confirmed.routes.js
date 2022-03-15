"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.confirmRoutes = void 0;

var _express = require("express");

var _CreateConfirmController = require("../../../../modules/accounts/useCases/createConfirmUseCase/CreateConfirmController");

var _FindConfirmedByFamilyController = require("../../../../modules/accounts/useCases/FindConfirmedByFamily/FindConfirmedByFamilyController");

var _FindConfirmedsController = require("../../../../modules/accounts/useCases/findConfirmeds/FindConfirmedsController");

var _FindFamilyByAccessCodeController = require("../../../../modules/accounts/useCases/findFamilyByAccessCode/FindFamilyByAccessCodeController");

var _FindNotConfirmedsController = require("../../../../modules/accounts/useCases/findNotConfirmeds /FindNotConfirmedsController");

const confirmRoutes = (0, _express.Router)();
exports.confirmRoutes = confirmRoutes;
const createConfirmController = new _CreateConfirmController.CreateConfirmController();
const findConfirmedsController = new _FindConfirmedsController.FindConfirmedsController();
const findNotConfirmedsController = new _FindNotConfirmedsController.FindNotConfirmedsController();
const findConfirmedByFamilyController = new _FindConfirmedByFamilyController.FindConfirmedByFamilyController();
const findFamilyByAccessCodeController = new _FindFamilyByAccessCodeController.FindFamilyByAccessCodeController();
confirmRoutes.post('/create/:access_code', createConfirmController.handle);
confirmRoutes.get('', findConfirmedsController.handle);
confirmRoutes.get('/not', findNotConfirmedsController.handle);
confirmRoutes.get('/family/:id', findConfirmedByFamilyController.handle);
confirmRoutes.get('/code/:access_code', findFamilyByAccessCodeController.handle);