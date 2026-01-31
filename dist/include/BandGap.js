"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BandGap = void 0;
const utils_1 = require("@mat3ra/utils");
const Box_1 = __importDefault(require("@mui/material/Box"));
const Grid_1 = __importDefault(require("@mui/material/Grid"));
const styles_1 = require("@mui/material/styles");
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const useMediaQuery_1 = __importDefault(require("@mui/material/useMediaQuery"));
const prop_types_1 = __importDefault(require("prop-types"));
const react_1 = __importDefault(require("react"));
const underscore_string_1 = __importDefault(require("underscore.string"));
const { numberFormat, numberPadArray } = utils_1.Utils.str;
function Item({ title, value }) {
    const theme = (0, styles_1.useTheme)();
    const isMobile = (0, useMediaQuery_1.default)(theme.breakpoints.down("sm"));
    return (react_1.default.createElement(Box_1.default, { sx: {
            display: "flex",
            alignItems: "center",
            justifyContent: isMobile ? "" : "space-between",
        } },
        react_1.default.createElement(Typography_1.default, { variant: "body2", color: "text.primary", sx: { width: isMobile ? "50%" : "initial" } }, title),
        react_1.default.createElement(Typography_1.default, { variant: "body2", color: "text.primary", sx: { width: isMobile ? "50%" : "initial" } }, value)));
}
Item.propTypes = {
    title: prop_types_1.default.string.isRequired,
    value: prop_types_1.default.string.isRequired,
};
// TODO: refactor to use generic data type class instead
// eslint-disable-next-line react/prefer-stateless-function
class BandGap extends react_1.default.Component {
    render() {
        const { data: gap, showSpin } = this.props;
        return (react_1.default.createElement(Grid_1.default, { container: true, spacing: 2 },
            react_1.default.createElement(Grid_1.default, { item: true, xs: 12 },
                react_1.default.createElement(Item, { title: `${underscore_string_1.default.capitalize(gap.type)} gap (${gap.units}):`, value: numberFormat(gap.value, 3) })),
            showSpin ? (react_1.default.createElement(Grid_1.default, { item: true, xs: 12 },
                react_1.default.createElement(Item, { title: "Spin:", value: numberFormat(gap.spin, 1) }))) : null,
            gap.kpointValence ? (react_1.default.createElement(Grid_1.default, { item: true, xs: 12 },
                react_1.default.createElement(Item, { title: "Valence Kpoint:", value: numberPadArray(gap.kpointValence) }))) : null,
            gap.kpointConduction ? (react_1.default.createElement(Grid_1.default, { item: true, xs: 12 },
                react_1.default.createElement(Item, { title: "Conduction Kpoint:", value: numberPadArray(gap.kpointConduction) }))) : null,
            gap.eigenvalueValence ? (react_1.default.createElement(Grid_1.default, { item: true, xs: 12 },
                react_1.default.createElement(Item, { title: `Highest Eigenvalue of Valence Band (${gap.units}):`, value: numberPadArray(gap.kpointConduction) }))) : null,
            gap.eigenvalueConduction ? (react_1.default.createElement(Grid_1.default, { item: true, xs: 12 },
                react_1.default.createElement(Item, { title: `Lowest Eigenvalue of Conduction Band (${gap.units}):`, value: numberFormat(gap.eigenvalueConduction, 3) }))) : null));
    }
}
exports.BandGap = BandGap;
BandGap.propTypes = {
    data: prop_types_1.default.object,
    showSpin: prop_types_1.default.bool,
};
BandGap.defaultProps = {
    data: {},
    showSpin: false,
};
