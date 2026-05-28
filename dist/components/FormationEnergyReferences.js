import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
function formatNumber(value, decimals) {
    if (value == null || Number.isNaN(value)) {
        return "—";
    }
    return value.toFixed(decimals);
}
function formatPrecision(row) {
    if (row.precision_value == null && !row.precision_metric) {
        return "—";
    }
    if (row.precision_value != null && row.precision_metric) {
        return `${row.precision_value} ${row.precision_metric}`;
    }
    if (row.precision_value != null) {
        return String(row.precision_value);
    }
    return row.precision_metric || "—";
}
export function FormationEnergyReferences({ property }) {
    var _a, _b;
    const rows = (_b = (_a = property.value) === null || _a === void 0 ? void 0 : _a.rows) !== null && _b !== void 0 ? _b : [];
    if (!rows.length) {
        return null;
    }
    return (_jsxs(Box, { p: 4, sx: { overflow: "auto" }, children: [_jsx(Typography, { variant: "subtitle2", color: "text.primary", gutterBottom: true, children: "Formation energy references" }), _jsxs(Table, { size: "small", children: [_jsx(TableHead, { children: _jsxs(TableRow, { children: [_jsx(TableCell, { children: "Material" }), _jsx(TableCell, { align: "right", children: "Total energy (eV)" }), _jsx(TableCell, { align: "right", children: "N atoms" }), _jsx(TableCell, { align: "right", children: "Total energy per atom (eV/atom)" }), _jsx(TableCell, { children: "Precision" })] }) }), _jsx(TableBody, { children: rows.map((row) => (_jsxs(TableRow, { children: [_jsx(TableCell, { children: row.label }), _jsx(TableCell, { align: "right", children: formatNumber(row.total_energy, 6) }), _jsx(TableCell, { align: "right", children: formatNumber(row.n_atoms, 0) }), _jsx(TableCell, { align: "right", children: formatNumber(row.total_energy_per_atom, 3) }), _jsx(TableCell, { children: formatPrecision(row) })] }, row.label))) })] })] }));
}
