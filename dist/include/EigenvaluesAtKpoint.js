"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EigenvaluesAtKpoint = void 0;
/* eslint-disable react/no-array-index-key */
const IconByName_1 = __importDefault(require("@exabyte-io/cove.js/dist/mui/components/icon/IconByName"));
const utils_1 = require("@mat3ra/utils");
const Box_1 = __importDefault(require("@mui/material/Box"));
const Button_1 = __importDefault(require("@mui/material/Button"));
const Table_1 = __importDefault(require("@mui/material/Table"));
const TableBody_1 = __importDefault(require("@mui/material/TableBody"));
const TableCell_1 = __importDefault(require("@mui/material/TableCell"));
const TableHead_1 = __importDefault(require("@mui/material/TableHead"));
const TableRow_1 = __importDefault(require("@mui/material/TableRow"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const prop_types_1 = __importDefault(require("prop-types"));
const react_1 = __importDefault(require("react"));
const { numberPadArray } = utils_1.Utils.str;
// TODO: refactor to use generic data type class instead
class EigenvaluesAtKpoint extends react_1.default.Component {
    constructor(config) {
        super(config);
        this.state = {
            isExpanded: false,
        };
    }
    renderEigenvaluesAtKpoint(eigenvalues) {
        const result = [];
        eigenvalues.eigenvalues.forEach((value, index) => {
            result.push(react_1.default.createElement(TableRow_1.default, { key: index },
                react_1.default.createElement(TableCell_1.default, null, numberPadArray(eigenvalues.kpoint)),
                react_1.default.createElement(TableCell_1.default, { align: "right" }, eigenvalues.weight.toFixed(4)),
                react_1.default.createElement(TableCell_1.default, { align: "right" }, value.spin),
                react_1.default.createElement(TableCell_1.default, { align: "right" }, value.energies.map((element, idx) => {
                    return react_1.default.createElement("div", { key: idx }, element);
                })),
                react_1.default.createElement(TableCell_1.default, { align: "right" }, value.occupations.map((element, idx) => {
                    return react_1.default.createElement("div", { key: idx }, element);
                }))));
        });
        return result;
    }
    renderAllKpoints() {
        const { data } = this.props;
        return (data || []).map((eigenvalues) => {
            return this.renderEigenvaluesAtKpoint(eigenvalues);
        });
    }
    renderSwitch() {
        const { isExpanded } = this.state;
        return (react_1.default.createElement(Button_1.default, { onClick: () => this.setState({ isExpanded: !isExpanded }) },
            react_1.default.createElement(IconByName_1.default, { name: isExpanded ? "actions.collapse" : "shapes.dots.horizontal", fontSize: "small" })));
    }
    render() {
        const { isExpanded } = this.state;
        return (react_1.default.createElement(Box_1.default, null,
            react_1.default.createElement(Typography_1.default, { variant: "subtitle2", color: "text.primary" }, "Eigenvalues"),
            react_1.default.createElement(Table_1.default, null,
                react_1.default.createElement(TableHead_1.default, null,
                    react_1.default.createElement(TableRow_1.default, null,
                        react_1.default.createElement(TableCell_1.default, null, "Kpoint"),
                        react_1.default.createElement(TableCell_1.default, { align: "right" }, "Weight"),
                        react_1.default.createElement(TableCell_1.default, { align: "right" }, "Spin"),
                        react_1.default.createElement(TableCell_1.default, { align: "right" }, "Energies"),
                        react_1.default.createElement(TableCell_1.default, { align: "right" }, "Occupations"))),
                react_1.default.createElement(TableBody_1.default, null,
                    isExpanded && this.renderAllKpoints(),
                    this.renderSwitch()))));
    }
}
exports.EigenvaluesAtKpoint = EigenvaluesAtKpoint;
EigenvaluesAtKpoint.propTypes = {
    data: prop_types_1.default.array,
};
EigenvaluesAtKpoint.defaultProps = {
    data: [],
};
