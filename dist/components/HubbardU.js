"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HubbardU = void 0;
const Box_1 = __importDefault(require("@mui/material/Box"));
const Table_1 = __importDefault(require("@mui/material/Table"));
const TableBody_1 = __importDefault(require("@mui/material/TableBody"));
const TableCell_1 = __importDefault(require("@mui/material/TableCell"));
const TableHead_1 = __importDefault(require("@mui/material/TableHead"));
const TableRow_1 = __importDefault(require("@mui/material/TableRow"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const react_1 = __importDefault(require("react"));
const PropertyComponent_1 = require("./primitive/PropertyComponent");
class HubbardU extends PropertyComponent_1.PropertyComponent {
    render() {
        const { values = [] } = this.props.property;
        const headers = ["Site no.", "Atomic species (new label)", "Orbital/manifold", "U (eV)"];
        return (react_1.default.createElement(Box_1.default, { p: 4, sx: { overflow: "scroll" } },
            react_1.default.createElement(Typography_1.default, { variant: "subtitle2", color: "text.primary" }, "Hubbard U parameters"),
            react_1.default.createElement(Table_1.default, null,
                react_1.default.createElement(TableHead_1.default, null,
                    react_1.default.createElement(TableRow_1.default, null, headers.map((item, idx) => {
                        const key = `hubbard-header-${idx}`;
                        return react_1.default.createElement(TableCell_1.default, { key: key }, item);
                    }))),
                react_1.default.createElement(TableBody_1.default, null, values.map((row, idx) => {
                    const key = `hubbard-${idx}`;
                    return (react_1.default.createElement(TableRow_1.default, { key: key },
                        react_1.default.createElement(TableCell_1.default, null, row.id),
                        react_1.default.createElement(TableCell_1.default, null,
                            row.atomicSpecies,
                            " (",
                            row.newLabel,
                            ")"),
                        react_1.default.createElement(TableCell_1.default, null, row.orbitalName),
                        react_1.default.createElement(TableCell_1.default, null, row.value)));
                })))));
    }
}
exports.HubbardU = HubbardU;
