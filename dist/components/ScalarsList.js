"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScalarsList = void 0;
const prode_1 = require("@mat3ra/prode");
const utils_1 = require("@mat3ra/utils");
const Box_1 = __importDefault(require("@mui/material/Box"));
const Grid_1 = __importDefault(require("@mui/material/Grid"));
const prop_types_1 = __importDefault(require("prop-types"));
const react_1 = __importDefault(require("react"));
const underscore_string_1 = __importDefault(require("underscore.string"));
const getview_1 = require("../getview");
const Scalar_1 = require("./primitive/Scalar");
const { numberFormat } = utils_1.Utils.str;
class ScalarsList extends react_1.default.Component {
    get scalarResults() {
        const scalarResultsNames = prode_1.PropertyFactory.getScalarPropertyNames();
        return (
        // eslint-disable-next-line react/destructuring-assignment
        this.props.results.filter((x) => {
            return scalarResultsNames.includes(x.name) && Object.keys(x).length > 1;
        }) || []);
    }
    render() {
        const widgets = [];
        this.scalarResults.forEach((result) => {
            const config = (0, getview_1.getScalarViewConfig)(result.name);
            const propertyId = underscore_string_1.default.slugify(result.name);
            if (result.value !== undefined) {
                widgets.push(react_1.default.createElement(Grid_1.default, { item: true, xs: 12, sm: 6, md: 3, key: propertyId, "data-tid": propertyId },
                    react_1.default.createElement(Box_1.default, { mb: 2 },
                        react_1.default.createElement(Scalar_1.Scalar, { icon: config.icon, value: numberFormat(result.value, config.decimals), title: underscore_string_1.default.humanize(result.name), units: result.units }))));
            }
        });
        // auto-hide the component if no scalar results
        if (!widgets.length)
            return null;
        return (react_1.default.createElement(Grid_1.default, { container: true, p: 4 }, widgets));
    }
}
exports.ScalarsList = ScalarsList;
ScalarsList.propTypes = {
    // eslint-disable-next-line react/require-default-props
    results: prop_types_1.default.array,
};
