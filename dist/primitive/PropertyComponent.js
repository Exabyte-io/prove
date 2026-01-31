"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyComponent = void 0;
/* eslint-disable react/no-unused-prop-types */
const prop_types_1 = __importDefault(require("prop-types"));
const react_1 = __importDefault(require("react"));
class PropertyComponent extends react_1.default.Component {
    constructor(props) {
        super(props);
        // eslint-disable-next-line react/no-unused-class-component-methods
        this.context = props.context; // making context non-reactive
    }
    render() {
        return null;
    }
}
exports.PropertyComponent = PropertyComponent;
PropertyComponent.propTypes = {
    property: prop_types_1.default.object,
    data: prop_types_1.default.object,
    title: prop_types_1.default.string,
    context: prop_types_1.default.object,
};
PropertyComponent.defaultProps = {
    property: {},
    data: {},
    title: "",
    context: {},
};
