"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConvergencesList = void 0;
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-prototype-builtins */
const prode_1 = require("@mat3ra/prode");
const prop_types_1 = __importDefault(require("prop-types"));
const react_1 = __importDefault(require("react"));
const underscore_string_1 = __importDefault(require("underscore.string"));
const Chart_1 = require("./primitive/Chart");
class ConvergencesList extends react_1.default.Component {
    render() {
        const monitorComponents = [];
        const { monitors, idGenerator } = this.props;
        const convergencePropertyNames = prode_1.PropertyFactory.getConvergencePropertyNames();
        monitors.forEach((monitor) => {
            if (convergencePropertyNames.includes(monitor.name)) {
                const property = prode_1.PropertyFactory.createProperty(monitor);
                const config = property.chartConfig;
                const propertyId = underscore_string_1.default.slugify(this.idPrefix + " " + monitor.name);
                monitorComponents.push(react_1.default.createElement(Chart_1.Chart, { config: config, key: propertyId, title: underscore_string_1.default.humanize(monitor.name), idGenerator: idGenerator }));
            }
        });
        return (react_1.default.createElement("div", { className: "convergences-list" }, monitorComponents.length > 0 ? (react_1.default.createElement("div", { className: "col-xs-12 p-l-0 p-r-0" }, monitorComponents)) : null));
    }
}
exports.ConvergencesList = ConvergencesList;
ConvergencesList.propTypes = {
    idPrefix: prop_types_1.default.string.isRequired,
    monitors: prop_types_1.default.array,
    idGenerator: prop_types_1.default.func,
};
