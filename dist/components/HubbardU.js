"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HubbardU = void 0;
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _Table = _interopRequireDefault(require("@mui/material/Table"));
var _TableBody = _interopRequireDefault(require("@mui/material/TableBody"));
var _TableCell = _interopRequireDefault(require("@mui/material/TableCell"));
var _TableHead = _interopRequireDefault(require("@mui/material/TableHead"));
var _TableRow = _interopRequireDefault(require("@mui/material/TableRow"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _react = _interopRequireDefault(require("react"));
var _PropertyComponent = require("./primitive/PropertyComponent");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class HubbardU extends _PropertyComponent.PropertyComponent {
  render() {
    const {
      values = []
    } = this.props.property;
    const headers = ["Site no.", "Atomic species (new label)", "Orbital/manifold", "U (eV)"];
    return /*#__PURE__*/_react.default.createElement(_Box.default, {
      p: 4,
      sx: {
        overflow: "scroll"
      }
    }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
      variant: "subtitle2",
      color: "text.primary"
    }, "Hubbard U parameters"), /*#__PURE__*/_react.default.createElement(_Table.default, null, /*#__PURE__*/_react.default.createElement(_TableHead.default, null, /*#__PURE__*/_react.default.createElement(_TableRow.default, null, headers.map((item, idx) => {
      const key = `hubbard-header-${idx}`;
      return /*#__PURE__*/_react.default.createElement(_TableCell.default, {
        key: key
      }, item);
    }))), /*#__PURE__*/_react.default.createElement(_TableBody.default, null, values.map((row, idx) => {
      const key = `hubbard-${idx}`;
      return /*#__PURE__*/_react.default.createElement(_TableRow.default, {
        key: key
      }, /*#__PURE__*/_react.default.createElement(_TableCell.default, null, row.id), /*#__PURE__*/_react.default.createElement(_TableCell.default, null, row.atomicSpecies, " (", row.newLabel, ")"), /*#__PURE__*/_react.default.createElement(_TableCell.default, null, row.orbitalName), /*#__PURE__*/_react.default.createElement(_TableCell.default, null, row.value));
    }))));
  }
}
exports.HubbardU = HubbardU;