"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EigenvaluesAtKpoint = void 0;
var _IconByName = _interopRequireDefault(require("@exabyte-io/cove.js/dist/mui/components/icon/IconByName"));
var _utils = require("@mat3ra/utils");
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _Button = _interopRequireDefault(require("@mui/material/Button"));
var _Table = _interopRequireDefault(require("@mui/material/Table"));
var _TableBody = _interopRequireDefault(require("@mui/material/TableBody"));
var _TableCell = _interopRequireDefault(require("@mui/material/TableCell"));
var _TableHead = _interopRequireDefault(require("@mui/material/TableHead"));
var _TableRow = _interopRequireDefault(require("@mui/material/TableRow"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* eslint-disable react/no-array-index-key */

const {
  numberPadArray
} = _utils.Utils.str;

// TODO: refactor to use generic data type class instead
class EigenvaluesAtKpoint extends _react.default.Component {
  constructor(config) {
    super(config);
    this.state = {
      isExpanded: false
    };
  }
  renderEigenvaluesAtKpoint(eigenvalues) {
    const result = [];
    eigenvalues.eigenvalues.forEach((value, index) => {
      result.push(/*#__PURE__*/_react.default.createElement(_TableRow.default, {
        key: index
      }, /*#__PURE__*/_react.default.createElement(_TableCell.default, null, numberPadArray(eigenvalues.kpoint)), /*#__PURE__*/_react.default.createElement(_TableCell.default, {
        align: "right"
      }, eigenvalues.weight.toFixed(4)), /*#__PURE__*/_react.default.createElement(_TableCell.default, {
        align: "right"
      }, value.spin), /*#__PURE__*/_react.default.createElement(_TableCell.default, {
        align: "right"
      }, value.energies.map((element, idx) => {
        return /*#__PURE__*/_react.default.createElement("div", {
          key: idx
        }, element);
      })), /*#__PURE__*/_react.default.createElement(_TableCell.default, {
        align: "right"
      }, value.occupations.map((element, idx) => {
        return /*#__PURE__*/_react.default.createElement("div", {
          key: idx
        }, element);
      }))));
    });
    return result;
  }
  renderAllKpoints() {
    const {
      data
    } = this.props;
    return (data || []).map(eigenvalues => {
      return this.renderEigenvaluesAtKpoint(eigenvalues);
    });
  }
  renderSwitch() {
    const {
      isExpanded
    } = this.state;
    return /*#__PURE__*/_react.default.createElement(_Button.default, {
      onClick: () => this.setState({
        isExpanded: !isExpanded
      })
    }, /*#__PURE__*/_react.default.createElement(_IconByName.default, {
      name: isExpanded ? "actions.collapse" : "shapes.dots.horizontal",
      fontSize: "small"
    }));
  }
  render() {
    const {
      isExpanded
    } = this.state;
    return /*#__PURE__*/_react.default.createElement(_Box.default, null, /*#__PURE__*/_react.default.createElement(_Typography.default, {
      variant: "subtitle2",
      color: "text.primary"
    }, "Eigenvalues"), /*#__PURE__*/_react.default.createElement(_Table.default, null, /*#__PURE__*/_react.default.createElement(_TableHead.default, null, /*#__PURE__*/_react.default.createElement(_TableRow.default, null, /*#__PURE__*/_react.default.createElement(_TableCell.default, null, "Kpoint"), /*#__PURE__*/_react.default.createElement(_TableCell.default, {
      align: "right"
    }, "Weight"), /*#__PURE__*/_react.default.createElement(_TableCell.default, {
      align: "right"
    }, "Spin"), /*#__PURE__*/_react.default.createElement(_TableCell.default, {
      align: "right"
    }, "Energies"), /*#__PURE__*/_react.default.createElement(_TableCell.default, {
      align: "right"
    }, "Occupations"))), /*#__PURE__*/_react.default.createElement(_TableBody.default, null, isExpanded && this.renderAllKpoints(), this.renderSwitch())));
  }
}
exports.EigenvaluesAtKpoint = EigenvaluesAtKpoint;
EigenvaluesAtKpoint.propTypes = {
  data: _propTypes.default.array
};
EigenvaluesAtKpoint.defaultProps = {
  data: []
};