"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRoutes = void 0;

var _express = require("express");

var _CreateUserController = require("../../../../modules/accounts/useCases/createUser/CreateUserController");

var _FindUsersController = require("../../../../modules/accounts/useCases/findUsers/FindUsersController");

const userRoutes = (0, _express.Router)();
exports.userRoutes = userRoutes;
const createUserController = new _CreateUserController.CreateUserController();
const findUsersController = new _FindUsersController.FindUsersController();
userRoutes.post('/create', createUserController.handle);
userRoutes.get('/getAll', findUsersController.handle);