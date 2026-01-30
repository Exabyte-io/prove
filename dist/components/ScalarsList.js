"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScalarsList = void 0;
var _prode = require("@mat3ra/prode");
var _utils = require("@mat3ra/utils");
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _Grid = _interopRequireDefault(require("@mui/material/Grid"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _underscore = _interopRequireDefault(require("underscore.string"));
var _getview = require("../getview");
var _Scalar = require("./primitive/Scalar");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const {
  numberFormat
} = _utils.Utils.str;
class ScalarsList extends _react.default.Component {
  get scalarResults() {
    const scalarResultsNames = _prode.PropertyFactory.getScalarPropertyNames();
    return (
      // eslint-disable-next-line react/destructuring-assignment
      this.props.results.filter(x => {
        return scalarResultsNames.includes(x.name) && Object.keys(x).length > 1;
      }) || []
    );
  }
  render() {
    const widgets = [];
    this.scalarResults.forEach(result => {
      const config = (0, _getview.getScalarViewConfig)(result.name);
      const propertyId = _underscore.default.slugify(result.name);
      if (result.value !== undefined) {
        widgets.push(/*#__PURE__*/_react.default.createElement(_Grid.default, {
          item: true,
          xs: 12,
          sm: 6,
          md: 3,
          key: propertyId,
          "data-tid": propertyId
        }, /*#__PURE__*/_react.default.createElement(_Box.default, {
          mb: 2
        }, /*#__PURE__*/_react.default.createElement(_Scalar.Scalar, {
          icon: config.icon,
          value: numberFormat(result.value, config.decimals),
          title: _underscore.default.humanize(result.name),
          units: result.units
        }))));
      }
    });

    // auto-hide the component if no scalar results
    if (!widgets.length) return null;
    return /*#__PURE__*/_react.default.createElement(_Grid.default, {
      container: true,
      p: 4
    }, widgets);
  }
}
exports.ScalarsList = ScalarsList;
ScalarsList.propTypes = {
  // eslint-disable-next-line react/require-default-props
  results: _propTypes.default.array
};