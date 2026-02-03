import { jsx as _jsx } from "react/jsx-runtime";
import { PropertyFactory } from "@mat3ra/prode";
import { Utils } from "@mat3ra/utils";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import s from "underscore.string";
import { getScalarViewConfig } from "../getview";
import { Scalar } from "./primitive/Scalar";
const { numberFormat } = Utils.str;
export class ScalarsList extends React.Component {
    get scalarResults() {
        var _a;
        const scalarResultsNames = PropertyFactory.getScalarPropertyNames();
        return (((_a = this.props.results) === null || _a === void 0 ? void 0 : _a.filter((x) => {
            return scalarResultsNames.includes(x.name) && Object.keys(x).length > 1;
        })) || []);
    }
    render() {
        const widgets = [];
        this.scalarResults.forEach((result) => {
            const config = getScalarViewConfig(result.name) || {};
            const propertyId = s.slugify(result.name);
            if (result.value !== undefined && config) {
                widgets.push(_jsx(Grid, { item: true, xs: 12, sm: 6, md: 3, "data-tid": propertyId, children: _jsx(Box, { mb: 2, children: _jsx(Scalar, { icon: config.icon || "", value: numberFormat(result.value, config.decimals), title: s.humanize(result.name), units: result.units }) }) }, propertyId));
            }
        });
        // auto-hide the component if no scalar results
        if (!widgets.length)
            return null;
        return (_jsx(Grid, { container: true, p: 4, children: widgets }));
    }
}
