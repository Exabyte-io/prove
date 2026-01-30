"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HubbardV = void 0;
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
class HubbardV extends _PropertyComponent.PropertyComponent {
  render() {
    let {
      values = []
    } = this.props.property;
    // filter out empty objects from the array e.g., [{}] => []
    values = values.filter(item => Object.keys(item).length !== 0);
    const headers = ["Site no. 1", "Atom 1", "Orbital 1", "Site no. 2", "Atom 2", "Orbital 2", "Distance (Bohr)", "V (eV)"];
    return values.length > 0 ? /*#__PURE__*/_react.default.createElement(_Box.default, {
      p: 4,
      sx: {
        overflow: "scroll"
      }
    }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
      variant: "subtitle2",
      color: "text.primary"
    }, "Hubbard V parameters (all neighbors in 3x3x3 supercell)"), /*#__PURE__*/_react.default.createElement(_Table.default, null, /*#__PURE__*/_react.default.createElement(_TableHead.default, null, /*#__PURE__*/_react.default.createElement(_TableRow.default, null, headers.map((item, idx) => {
      const key = `hubbard-v-header-${idx}`;
      return /*#__PURE__*/_react.default.createElement(_TableCell.default, {
        key: key
      }, item);
    }))), /*#__PURE__*/_react.default.createElement(_TableBody.default, null, values.map((row, idx) => {
      const key = `hubbard-v-${idx}`;
      return /*#__PURE__*/_react.default.createElement(_TableRow.default, {
        key: key
      }, /*#__PURE__*/_react.default.createElement(_TableCell.default, null, row.id), /*#__PURE__*/_react.default.createElement(_TableCell.default, null, row.atomicSpecies), /*#__PURE__*/_react.default.createElement(_TableCell.default, null, row.orbitalName), /*#__PURE__*/_react.default.createElement(_TableCell.default, null, row.id2), /*#__PURE__*/_react.default.createElement(_TableCell.default, null, row.atomicSpecies2), /*#__PURE__*/_react.default.createElement(_TableCell.default, null, row.orbitalName2), /*#__PURE__*/_react.default.createElement(_TableCell.default, null, row.distance), /*#__PURE__*/_react.default.createElement(_TableCell.default, null, row.value));
    })))) : null;
  }
}
exports.HubbardV = HubbardV;