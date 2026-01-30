"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BandGaps = void 0;
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _Grid = _interopRequireDefault(require("@mui/material/Grid"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _react = _interopRequireDefault(require("react"));
var _BandGap = require("./include/BandGap");
var _EigenvaluesAtKpoint = require("./include/EigenvaluesAtKpoint");
var _PropertyComponent = require("./primitive/PropertyComponent");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* eslint-disable react/no-array-index-key */

// TODO: migrate to use generic data type class instead
class BandGaps extends _PropertyComponent.PropertyComponent {
  render() {
    const {
      eigenvalues,
      values = []
    } = this.props.property;
    const spins = new Set(values.map(gap => gap.spin));
    return /*#__PURE__*/_react.default.createElement(_Box.default, {
      p: 4
    }, /*#__PURE__*/_react.default.createElement(_Box.default, {
      className: "band-gaps"
    }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
      variant: "subtitle2",
      color: "text.primary"
    }, "Band gap"), /*#__PURE__*/_react.default.createElement(_Grid.default, {
      container: true,
      spacing: 3
    }, (values || []).map((gap, idx) => {
      return /*#__PURE__*/_react.default.createElement(_Grid.default, {
        item: true,
        p: 1,
        xs: 12,
        lg: 6,
        key: `${idx}-${gap.value}`
      }, /*#__PURE__*/_react.default.createElement(_BandGap.BandGap, {
        data: gap,
        showSpin: spins.size > 1
      }));
    }))), Boolean(eigenvalues && eigenvalues.length) && /*#__PURE__*/_react.default.createElement(_Box.default, {
      p: 2,
      sx: {
        overflow: "auto"
      }
    }, /*#__PURE__*/_react.default.createElement(_EigenvaluesAtKpoint.EigenvaluesAtKpoint, {
      data: eigenvalues
    })));
  }
}
exports.BandGaps = BandGaps;