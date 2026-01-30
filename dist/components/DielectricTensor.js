"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DielectricTensor = DielectricTensor;
var _react = _interopRequireDefault(require("react"));
var _Chart = require("./primitive/Chart");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// TODO: migrate to use generic data type class instead
function DielectricTensor({
  property
}) {
  const {
    name,
    chartConfig
  } = property;
  const configs = chartConfig || [];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, configs.map((config, index) => {
    const key = `${name}-${index}`;
    return /*#__PURE__*/_react.default.createElement(_Chart.Chart, {
      config: config,
      title: name,
      key: key
    });
  }));
}