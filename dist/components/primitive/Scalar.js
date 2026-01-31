"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scalar = void 0;
const icon_1 = __importDefault(require("@exabyte-io/cove.js/dist/mui/components/icon"));
const Box_1 = __importDefault(require("@mui/material/Box"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const react_1 = __importDefault(require("react"));
function Scalar({ icon, title, units, value }) {
    return (react_1.default.createElement(Box_1.default, { sx: { display: "flex", alignItems: "center", justifyContent: "center" } },
        react_1.default.createElement(Box_1.default, { className: "chart", px: 2 },
            react_1.default.createElement(icon_1.default, { name: icon, fontSize: "large" })),
        react_1.default.createElement(Box_1.default, { className: "count" },
            react_1.default.createElement(Typography_1.default, { variant: "body2", color: "text.primary", className: "scalar-title" },
                title,
                " (",
                units,
                ")"),
            react_1.default.createElement(Typography_1.default, { variant: "h5", className: "scalar-value" }, value))));
}
exports.Scalar = Scalar;
