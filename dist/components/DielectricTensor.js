"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DielectricTensor = void 0;
const react_1 = __importDefault(require("react"));
const Chart_1 = require("./primitive/Chart");
// TODO: migrate to use generic data type class instead
function DielectricTensor({ property }) {
    const { name, chartConfig } = property;
    const configs = chartConfig || [];
    return (react_1.default.createElement(react_1.default.Fragment, null, configs.map((config, index) => {
        const key = `${name}-${index}`;
        return react_1.default.createElement(Chart_1.Chart, { config: config, title: name, key: key });
    })));
}
exports.DielectricTensor = DielectricTensor;
