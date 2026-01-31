"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HubbardVNN = void 0;
const Box_1 = __importDefault(require("@mui/material/Box"));
const Table_1 = __importDefault(require("@mui/material/Table"));
const TableBody_1 = __importDefault(require("@mui/material/TableBody"));
const TableCell_1 = __importDefault(require("@mui/material/TableCell"));
const TableHead_1 = __importDefault(require("@mui/material/TableHead"));
const TableRow_1 = __importDefault(require("@mui/material/TableRow"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const react_1 = __importDefault(require("react"));
const PropertyComponent_1 = require("./primitive/PropertyComponent");
class HubbardVNN extends PropertyComponent_1.PropertyComponent {
    render() {
        let { values = [] } = this.props.property;
        // filter out empty objects from the array e.g., [{}] => []
        values = values.filter((item) => Object.keys(item).length !== 0);
        const headers = [
            "Site no. 1",
            "Atom 1",
            "Orbital 1",
            "Site no. 2",
            "Atom 2",
            "Orbital 2",
            "V (eV)",
        ];
        return values.length > 0 ? (react_1.default.createElement(Box_1.default, { p: 4, sx: { overflow: "scroll" } },
            react_1.default.createElement(Typography_1.default, { variant: "subtitle2", color: "text.primary" }, "Hubbard V parameters (nearest neighbors)"),
            react_1.default.createElement(Table_1.default, null,
                react_1.default.createElement(TableHead_1.default, null,
                    react_1.default.createElement(TableRow_1.default, null, headers.map((item, idx) => {
                        const key = `hubbard-v-nn-header-${idx}`;
                        return react_1.default.createElement(TableCell_1.default, { key: key }, item);
                    }))),
                react_1.default.createElement(TableBody_1.default, null, values.map((row, idx) => {
                    const key = `hubbard-v-nn-${idx}`;
                    return (react_1.default.createElement(TableRow_1.default, { key: key },
                        react_1.default.createElement(TableCell_1.default, null, row.id),
                        react_1.default.createElement(TableCell_1.default, null, row.atomicSpecies),
                        react_1.default.createElement(TableCell_1.default, null, row.orbitalName),
                        react_1.default.createElement(TableCell_1.default, null, row.id2),
                        react_1.default.createElement(TableCell_1.default, null, row.atomicSpecies2),
                        react_1.default.createElement(TableCell_1.default, null, row.orbitalName2),
                        react_1.default.createElement(TableCell_1.default, null, row.value)));
                }))))) : null;
    }
}
exports.HubbardVNN = HubbardVNN;
