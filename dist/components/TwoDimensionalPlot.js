"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwoDimensionalPlot = void 0;
const react_1 = __importDefault(require("react"));
const Chart_1 = require("./primitive/Chart");
function TwoDimensionalPlot({ property, title }) {
    const { chartConfig, name } = property;
    return react_1.default.createElement(Chart_1.Chart, { config: chartConfig, title: title || name });
}
exports.TwoDimensionalPlot = TwoDimensionalPlot;
