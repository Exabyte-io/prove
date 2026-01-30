"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactHighchartsResizable = void 0;
var _styles = require("@mui/material/styles");
var _highcharts = _interopRequireDefault(require("highcharts"));
var _exportData = _interopRequireDefault(require("highcharts/modules/export-data"));
var _exporting = _interopRequireDefault(require("highcharts/modules/exporting"));
var _noDataToDisplay = _interopRequireDefault(require("highcharts/modules/no-data-to-display"));
var _offlineExporting = _interopRequireDefault(require("highcharts/modules/offline-exporting"));
var _highchartsMore = _interopRequireDefault(require("highcharts-more"));
var _highchartsReactOfficial = _interopRequireDefault(require("highcharts-react-official"));
var _lodash = _interopRequireDefault(require("lodash"));
var _react = _interopRequireDefault(require("react"));
var _HighchartsRemoveEmptySVGPaths = _interopRequireDefault(require("./HighchartsRemoveEmptySVGPaths"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */

// Highcharts more
(0, _highchartsMore.default)(_highcharts.default);
(0, _exporting.default)(_highcharts.default);
(0, _offlineExporting.default)(_highcharts.default);
(0, _exportData.default)(_highcharts.default);
(0, _HighchartsRemoveEmptySVGPaths.default)(_highcharts.default);
(0, _noDataToDisplay.default)(_highcharts.default);
const StyledDiv = (0, _styles.styled)("div")(({
  theme
}) => ({
  ".highcharts-data-table": {
    margin: theme.spacing(1),
    overflow: "auto"
  }
}));
class ReactHighchartsResizable extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      resized: false
    };
  }
  render() {
    const newProps = {
      ...this.props,
      domProps: {
        className: "chart-container",
        style: {
          height: "100%",
          maxWidth: "100%"
        },
        // eslint-disable-next-line react/destructuring-assignment,react/prop-types
        ...this.props.domProps
      }
    };
    return /*#__PURE__*/_react.default.createElement(StyledDiv, {
      className: "resizable-container",
      onClick: e => {
        // trigger update to re-render chart
        // prevent re-render when clicking on exporting buttons
        const parentClassName = _lodash.default.get(e, "target.parentElement.className.baseVal");
        const condition = parentClassName !== "highcharts-button highcharts-contextbutton highcharts-button-pressed";
        // TODO: fix re-rendering issue on zoom in
        // condition && this.setState({ resized: true });
      }
    }, /*#__PURE__*/_react.default.createElement(_highchartsReactOfficial.default, {
      resizable: false,
      highcharts: _highcharts.default,
      options: newProps.config,
      containerProps: newProps.domProps
    }));
  }
}
exports.ReactHighchartsResizable = ReactHighchartsResizable;