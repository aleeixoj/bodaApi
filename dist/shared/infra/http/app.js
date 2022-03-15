"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = void 0;

var _express = _interopRequireDefault(require("express"));

require("reflect-metadata");

require("express-async-errors");

require("../../container");

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _AppError = require("../../errors/AppError");

var _routes = require("./routes");

var _cors = _interopRequireDefault(require("cors"));

var _swagger = _interopRequireDefault(require("../../../swagger.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
exports.app = app;
app.use(_express.default.json());
app.use((0, _cors.default)());
app.use('/api-docs', _swaggerUiExpress.default.serve, _swaggerUiExpress.default.setup(_swagger.default));
app.use(_routes.router);
app.use((err, request, response, next) => {
  if (err instanceof _AppError.AppError) {
    return response.status(err.statusCode).json({
      message: err.message
    });
  }

  return response.status(500).json({
    status: 'error',
    message: `Internal server error - ${err.message}`
  });
});