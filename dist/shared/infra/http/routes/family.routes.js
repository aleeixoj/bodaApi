"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.familyRoutes = void 0;

var _express = require("express");

var _CreateFamilyController = require("../../../../modules/accounts/useCases/createFamily/CreateFamilyController");

var _CreateFamilyUserController = require("../../../../modules/accounts/useCases/createFamilyUser/CreateFamilyUserController");

var _FindFamilyByAccessCodeController = require("../../../../modules/accounts/useCases/findFamilyByAccessCode/FindFamilyByAccessCodeController");

const familyRoutes = (0, _express.Router)();
exports.familyRoutes = familyRoutes;
const createFamilyController = new _CreateFamilyController.CreateFamilyController();
const createFamilyUserController = new _CreateFamilyUserController.CreateFamilyUserController();
const findFamilyByAccessCodeController = new _FindFamilyByAccessCodeController.FindFamilyByAccessCodeController();
familyRoutes.post('/create', createFamilyController.handle);
familyRoutes.post('/addUser', createFamilyUserController.handle);
familyRoutes.get('/', findFamilyByAccessCodeController.handle);