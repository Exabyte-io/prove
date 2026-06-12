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
function getArrayHeaders(values) {
    return Array.from(new Set(values.flatMap((row) => Object.keys(row))));
}
function formatTableValue(value) {
    if (_.isNumber(value) || _.isString(value))
        return toFixed(value);
    if (_.isBoolean(value))
        return value ? "Yes" : "No";
    return value;
}
function getRowKey(row) {
    return row.map(({ key, value }) => `${key}:${String(value)}`).join("|");
}
function ObjectTable({ title, headers, rows }) {
    return (_jsxs(Box, { p: 4, sx: { overflow: "auto" }, children: [_jsx(Typography, { variant: "subtitle2", color: "text.primary", children: title }), _jsxs(Table, { children: [_jsx(TableHead, { children: _jsx(TableRow, { children: headers.map((header) => (_jsx(TableCell, { children: header.value }, header.key))) }) }), _jsx(TableBody, { children: rows.map((row) => (_jsx(TableRow, { children: row.map((cell) => (_jsx(TableCell, { children: cell.value }, cell.key))) }, getRowKey(row)))) })] })] }));
}
export function OneLevelObject({ title, data, property }) {
    const defaultTitle = React.useMemo(() => {
        if (property) {
            return new Property(property).prettyName;
        }
        return undefined;
    }, [property]);
    const { headers, rows } = React.useMemo(() => {
        const entries = Object.keys(data || {}).filter((key) => { var _a; return (_a = data[key]) === null || _a === void 0 ? void 0 : _a.value; });
        return {
            headers: entries.map((key) => ({
                key,
                value: `${s.humanize(data[key].name)} (${data.units || ""})`,
            })),
            rows: [
                entries.map((key) => ({
                    key,
                    value: toFixed(data[key].value),
                })),
            ],
        };
    }, [data]);
    return _jsx(ObjectTable, { title: title || defaultTitle, headers: headers, rows: rows });
}
export function ArrayOfObjects({ title, data, property }) {
    const values = React.useMemo(() => (data === null || data === void 0 ? void 0 : data.values) || (property === null || property === void 0 ? void 0 : property.prop("values")) || [], [data, property]);
    const headers = React.useMemo(() => getArrayHeaders(values), [values]);
    const rows = React.useMemo(() => {
        return values.map((row) => {
            return headers.map((header) => ({
                key: header,
                value: formatTableValue(row[header]),
            }));
        });
    }, [headers, values]);
    return (_jsx(ObjectTable, { title: title, headers: headers.map((header) => ({ key: header, value: s.humanize(header) })), rows: rows }));
}
