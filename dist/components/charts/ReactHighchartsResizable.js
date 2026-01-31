"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactHighchartsResizable = void 0;
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
const styles_1 = require("@mui/material/styles");
const highcharts_1 = __importDefault(require("highcharts"));
const export_data_1 = __importDefault(require("highcharts/modules/export-data"));
const exporting_1 = __importDefault(require("highcharts/modules/exporting"));
const no_data_to_display_1 = __importDefault(require("highcharts/modules/no-data-to-display"));
const offline_exporting_1 = __importDefault(require("highcharts/modules/offline-exporting"));
const highcharts_more_1 = __importDefault(require("highcharts-more"));
const highcharts_react_official_1 = __importDefault(require("highcharts-react-official"));
const lodash_1 = __importDefault(require("lodash"));
const react_1 = __importDefault(require("react"));
const HighchartsRemoveEmptySVGPaths_1 = __importDefault(require("./HighchartsRemoveEmptySVGPaths"));
// Highcharts more
(0, highcharts_more_1.default)(highcharts_1.default);
(0, exporting_1.default)(highcharts_1.default);
(0, offline_exporting_1.default)(highcharts_1.default);
(0, export_data_1.default)(highcharts_1.default);
(0, HighchartsRemoveEmptySVGPaths_1.default)(highcharts_1.default);
(0, no_data_to_display_1.default)(highcharts_1.default);
const StyledDiv = (0, styles_1.styled)("div")(({ theme }) => ({
    ".highcharts-data-table": {
        margin: theme.spacing(1),
        overflow: "auto",
    },
}));
class ReactHighchartsResizable extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            // eslint-disable-next-line react/no-unused-state
            resized: false,
        };
    }
    render() {
        const newProps = {
            ...this.props,
            domProps: {
                className: "chart-container",
                style: {
                    height: "100%",
                    maxWidth: "100%",
                },
                // eslint-disable-next-line react/destructuring-assignment,react/prop-types
                ...this.props.domProps,
            },
        };
        return (react_1.default.createElement(StyledDiv, { className: "resizable-container", onClick: (e) => {
                // trigger update to re-render chart
                // prevent re-render when clicking on exporting buttons
                const parentClassName = lodash_1.default.get(e, "target.parentElement.className.baseVal");
                const condition = parentClassName !==
                    "highcharts-button highcharts-contextbutton highcharts-button-pressed";
                // TODO: fix re-rendering issue on zoom in
                // condition && this.setState({ resized: true });
            } },
            react_1.default.createElement(highcharts_react_official_1.default, { resizable: false, highcharts: highcharts_1.default, options: newProps.config, containerProps: newProps.domProps })));
    }
}
exports.ReactHighchartsResizable = ReactHighchartsResizable;
