"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BandGaps = void 0;
/* eslint-disable react/no-array-index-key */
const Box_1 = __importDefault(require("@mui/material/Box"));
const Grid_1 = __importDefault(require("@mui/material/Grid"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const react_1 = __importDefault(require("react"));
const PropertyComponent_1 = require("./primitive/PropertyComponent");
const BandGap_1 = require("./include/BandGap");
const EigenvaluesAtKpoint_1 = require("./include/EigenvaluesAtKpoint");
// TODO: migrate to use generic data type class instead
class BandGaps extends PropertyComponent_1.PropertyComponent {
    render() {
        const { eigenvalues, values = [] } = this.props.property;
        const spins = new Set(values.map((gap) => gap.spin));
        return (react_1.default.createElement(Box_1.default, { p: 4 },
            react_1.default.createElement(Box_1.default, { className: "band-gaps" },
                react_1.default.createElement(Typography_1.default, { variant: "subtitle2", color: "text.primary" }, "Band gap"),
                react_1.default.createElement(Grid_1.default, { container: true, spacing: 3 }, (values || []).map((gap, idx) => {
                    return (react_1.default.createElement(Grid_1.default, { item: true, p: 1, xs: 12, lg: 6, key: `${idx}-${gap.value}` },
                        react_1.default.createElement(BandGap_1.BandGap, { data: gap, showSpin: spins.size > 1 })));
                }))),
            Boolean(eigenvalues && eigenvalues.length) && (react_1.default.createElement(Box_1.default, { p: 2, sx: { overflow: "auto" } },
                react_1.default.createElement(EigenvaluesAtKpoint_1.EigenvaluesAtKpoint, { data: eigenvalues })))));
    }
}
exports.BandGaps = BandGaps;
