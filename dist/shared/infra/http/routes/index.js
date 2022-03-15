"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;

var _express = require("express");

var _confirmed = require("./confirmed.routes");

var _family = require("./family.routes");

var _user = require("./user.routes");

const router = (0, _express.Router)();
exports.router = router;
router.use('/user', _user.userRoutes);
router.use('/family', _family.familyRoutes);
router.use('/confirm', _confirmed.confirmRoutes);