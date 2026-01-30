"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scalar = Scalar;
var _icon = _interopRequireDefault(require("@exabyte-io/cove.js/dist/mui/components/icon"));
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Scalar({
  icon,
  title,
  units,
  value
}) {
  return /*#__PURE__*/_react.default.createElement(_Box.default, {
    sx: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(_Box.default, {
    className: "chart",
    px: 2
  }, /*#__PURE__*/_react.default.createElement(_icon.default, {
    name: icon,
    fontSize: "large"
  })), /*#__PURE__*/_react.default.createElement(_Box.default, {
    className: "count"
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body2",
    color: "text.primary",
    className: "scalar-title"
  }, title, " (", units, ")"), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "h5",
    className: "scalar-value"
  }, value)));
}