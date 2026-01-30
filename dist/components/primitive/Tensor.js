"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tensor = Tensor;
var _utils = require("@mat3ra/utils");
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _List = _interopRequireDefault(require("@mui/material/List"));
var _ListItem = _interopRequireDefault(require("@mui/material/ListItem"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-array-index-key */

const {
  numberPadArray
} = _utils.Utils.str;
function Tensor({
  property,
  title
}) {
  const values = "value" in property ? property.value : property.values.map(val => val.value);
  return /*#__PURE__*/_react.default.createElement(_Box.default, {
    p: 4
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "subtitle2",
    color: "text.primary"
  }, title, " (", property.units, ")"), /*#__PURE__*/_react.default.createElement(_List.default, {
    sx: {
      whiteSpace: "pre"
    }
  }, values.map((val, index) => {
    return /*#__PURE__*/_react.default.createElement(_ListItem.default, {
      disablePadding: true,
      key: index,
      sx: {
        lineHeight: 0,
        justifyContent: "flex-end"
      }
    }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
      variant: "body2",
      color: "text.primary"
    }, numberPadArray(val)));
  })));
}