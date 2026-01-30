"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TwoDimensionalPlot = TwoDimensionalPlot;
var _react = _interopRequireDefault(require("react"));
var _Chart = require("./primitive/Chart");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function TwoDimensionalPlot({
  property
}) {
  const {
    chartConfig,
    name
  } = property;
  return /*#__PURE__*/_react.default.createElement(_Chart.Chart, {
    config: chartConfig,
    title: name
  });
}