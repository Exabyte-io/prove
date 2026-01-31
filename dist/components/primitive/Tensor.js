"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tensor = void 0;
const utils_1 = require("@mat3ra/utils");
const Box_1 = __importDefault(require("@mui/material/Box"));
const List_1 = __importDefault(require("@mui/material/List"));
const ListItem_1 = __importDefault(require("@mui/material/ListItem"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const react_1 = __importDefault(require("react"));
const { numberPadArray } = utils_1.Utils.str;
function Tensor({ property, title }) {
    const values = "value" in property ? property.value : property.values.map((val) => val.value);
    return (react_1.default.createElement(Box_1.default, { p: 4 },
        react_1.default.createElement(Typography_1.default, { variant: "subtitle2", color: "text.primary" },
            title,
            " (",
            property.units,
            ")"),
        react_1.default.createElement(List_1.default, { sx: { whiteSpace: "pre" } }, values.map((val, index) => {
            return (react_1.default.createElement(ListItem_1.default, { disablePadding: true, key: index, sx: { lineHeight: 0, justifyContent: "flex-end" } },
                react_1.default.createElement(Typography_1.default, { variant: "body2", color: "text.primary" }, numberPadArray(val))));
        }))));
}
exports.Tensor = Tensor;
