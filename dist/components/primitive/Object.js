import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Property } from "@mat3ra/prode";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import React from "react";
import _ from "underscore";
import s from "underscore.string";
function toFixed(number, precision = 3) {
    if (_.isNumber(number)) {
        return number.toFixed(precision);
    }
    return number;
}
export function OneLevelObject({ title, data, property }) {
    const defaultTitle = React.useMemo(() => {
        if (property) {
            return new Property(property).prettyName;
        }
        return undefined;
    }, [property]);
    const { headers, values } = React.useMemo(() => {
        const headersArray = [];
        const valuesArray = [];
        if (!data) {
            return { headers: headersArray, values: valuesArray };
        }
        const keys = Object.keys(data);
        keys.forEach((key) => {
            if (data[key] && data[key].value) {
                headersArray.push(_jsx(TableCell, { children: `${s.humanize(data[key].name)} (${data.units || ""})` }, `${key}-name`));
                valuesArray.push(_jsx(TableCell, { children: toFixed(data[key].value) }, `${key}-value`));
            }
        });
        return { headers: headersArray, values: valuesArray };
    }, [data]);
    return (_jsxs(Box, { p: 4, sx: { overflow: "auto" }, children: [_jsx(Typography, { variant: "subtitle2", color: "text.primary", children: title || defaultTitle }), _jsxs(Table, { children: [_jsx(TableHead, { children: _jsx(TableRow, { children: headers }) }), _jsx(TableBody, { children: values })] })] }));
}
