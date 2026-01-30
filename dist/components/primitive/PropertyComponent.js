"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PropertyComponent = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* eslint-disable react/no-unused-prop-types */

class PropertyComponent extends _react.default.Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line react/no-unused-class-component-methods
    this.context = props.context; // making context non-reactive
  }
  render() {
    return null;
  }
}
exports.PropertyComponent = PropertyComponent;
PropertyComponent.propTypes = {
  property: _propTypes.default.object,
  // {Property} class instance
  data: _propTypes.default.object,
  // "pure" object, or property config
  title: _propTypes.default.string,
  context: _propTypes.default.object
};
PropertyComponent.defaultProps = {
  property: {},
  data: {},
  title: "",
  context: {}
};