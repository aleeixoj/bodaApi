"use strict";

var _tsyringe = require("tsyringe");

require("./providers");

var _FamilyRepository = require("../../modules/accounts/infra/prisma/repositories/FamilyRepository");

var _UsersRepository = require("../../modules/accounts/infra/prisma/repositories/UsersRepository");

_tsyringe.container.registerSingleton('UsersRepository', _UsersRepository.UsersRepository);

_tsyringe.container.registerSingleton('FamilyRepository', _FamilyRepository.FamilyRepository);