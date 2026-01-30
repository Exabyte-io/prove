"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Chart = Chart;
var _utils = require("@mat3ra/code/dist/js/utils");
var _react = _interopRequireDefault(require("react"));
var _ReactHighchartsResizable = require("../charts/ReactHighchartsResizable");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Chart({
  config = {},
  title = "",
  idGenerator = _utils.getUUID
}) {
  return /*#__PURE__*/_react.default.createElement(_ReactHighchartsResizable.ReactHighchartsResizable, {
    config: config,
    domProps: {
      id: `${title || "chart"}-${idGenerator()}`
    }
  });
}