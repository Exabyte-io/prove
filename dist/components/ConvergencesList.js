"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConvergencesList = void 0;
var _prode = require("@mat3ra/prode");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _underscore = _interopRequireDefault(require("underscore.string"));
var _Chart = require("./primitive/Chart");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-prototype-builtins */

class ConvergencesList extends _react.default.Component {
  render() {
    const monitorComponents = [];
    const {
      monitors,
      idGenerator
    } = this.props;
    const convergencePropertyNames = _prode.PropertyFactory.getConvergencePropertyNames();
    monitors.forEach(monitor => {
      if (convergencePropertyNames.includes(monitor.name)) {
        const property = _prode.PropertyFactory.createProperty(monitor);
        const config = property.chartConfig;
        const propertyId = _underscore.default.slugify(this.idPrefix + " " + monitor.name);
        monitorComponents.push(/*#__PURE__*/_react.default.createElement(_Chart.Chart, {
          config: config,
          key: propertyId,
          title: _underscore.default.humanize(monitor.name),
          idGenerator: idGenerator
        }));
      }
    });
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "convergences-list"
    }, monitorComponents.length > 0 ? /*#__PURE__*/_react.default.createElement("div", {
      className: "col-xs-12 p-l-0 p-r-0"
    }, monitorComponents) : null);
  }
}
exports.ConvergencesList = ConvergencesList;
ConvergencesList.propTypes = {
  idPrefix: _propTypes.default.string.isRequired,
  monitors: _propTypes.default.array,
  idGenerator: _propTypes.default.func
};