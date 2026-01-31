"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chart = void 0;
const utils_1 = require("@mat3ra/code/dist/js/utils");
const react_1 = __importDefault(require("react"));
const ReactHighchartsResizable_1 = require("../charts/ReactHighchartsResizable");
function Chart({ config = {}, title = "", idGenerator = utils_1.getUUID }) {
    return (react_1.default.createElement(ReactHighchartsResizable_1.ReactHighchartsResizable, { config: config, domProps: {
            id: `${title || "chart"}-${idGenerator()}`,
        } }));
}
exports.Chart = Chart;
