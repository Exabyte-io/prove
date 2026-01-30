"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BandGap = void 0;
var _utils = require("@mat3ra/utils");
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _Grid = _interopRequireDefault(require("@mui/material/Grid"));
var _styles = require("@mui/material/styles");
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _useMediaQuery = _interopRequireDefault(require("@mui/material/useMediaQuery"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _underscore = _interopRequireDefault(require("underscore.string"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const {
  numberFormat,
  numberPadArray
} = _utils.Utils.str;
function Item({
  title,
  value
}) {
  const theme = (0, _styles.useTheme)();
  const isMobile = (0, _useMediaQuery.default)(theme.breakpoints.down("sm"));
  return /*#__PURE__*/_react.default.createElement(_Box.default, {
    sx: {
      display: "flex",
      alignItems: "center",
      justifyContent: isMobile ? "" : "space-between"
    }
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body2",
    color: "text.primary",
    sx: {
      width: isMobile ? "50%" : "initial"
    }
  }, title), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body2",
    color: "text.primary",
    sx: {
      width: isMobile ? "50%" : "initial"
    }
  }, value));
}
Item.propTypes = {
  title: _propTypes.default.string.isRequired,
  value: _propTypes.default.string.isRequired
};

// TODO: refactor to use generic data type class instead
// eslint-disable-next-line react/prefer-stateless-function
class BandGap extends _react.default.Component {
  render() {
    const {
      data: gap,
      showSpin
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(_Grid.default, {
      container: true,
      spacing: 2
    }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
      item: true,
      xs: 12
    }, /*#__PURE__*/_react.default.createElement(Item, {
      title: `${_underscore.default.capitalize(gap.type)} gap (${gap.units}):`,
      value: numberFormat(gap.value, 3)
    })), showSpin ? /*#__PURE__*/_react.default.createElement(_Grid.default, {
      item: true,
      xs: 12
    }, /*#__PURE__*/_react.default.createElement(Item, {
      title: "Spin:",
      value: numberFormat(gap.spin, 1)
    })) : null, gap.kpointValence ? /*#__PURE__*/_react.default.createElement(_Grid.default, {
      item: true,
      xs: 12
    }, /*#__PURE__*/_react.default.createElement(Item, {
      title: "Valence Kpoint:",
      value: numberPadArray(gap.kpointValence)
    })) : null, gap.kpointConduction ? /*#__PURE__*/_react.default.createElement(_Grid.default, {
      item: true,
      xs: 12
    }, /*#__PURE__*/_react.default.createElement(Item, {
      title: "Conduction Kpoint:",
      value: numberPadArray(gap.kpointConduction)
    })) : null, gap.eigenvalueValence ? /*#__PURE__*/_react.default.createElement(_Grid.default, {
      item: true,
      xs: 12
    }, /*#__PURE__*/_react.default.createElement(Item, {
      title: `Highest Eigenvalue of Valence Band (${gap.units}):`,
      value: numberPadArray(gap.kpointConduction)
    })) : null, gap.eigenvalueConduction ? /*#__PURE__*/_react.default.createElement(_Grid.default, {
      item: true,
      xs: 12
    }, /*#__PURE__*/_react.default.createElement(Item, {
      title: `Lowest Eigenvalue of Conduction Band (${gap.units}):`,
      value: numberFormat(gap.eigenvalueConduction, 3)
    })) : null);
  }
}
exports.BandGap = BandGap;
BandGap.propTypes = {
  data: _propTypes.default.object,
  showSpin: _propTypes.default.bool
};
BandGap.defaultProps = {
  data: {},
  showSpin: false
};