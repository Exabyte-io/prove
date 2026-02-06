import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
export function HubbardU({ property }) {
    const { values = [] } = property;
    const headers = ["Site no.", "Atomic species (new label)", "Orbital/manifold", "U (eV)"];
    return (_jsxs(Box, { p: 4, sx: { overflow: "scroll" }, children: [_jsx(Typography, { variant: "subtitle2", color: "text.primary", children: "Hubbard U parameters" }), _jsxs(Table, { children: [_jsx(TableHead, { children: _jsx(TableRow, { children: headers.map((item, idx) => {
                                const key = `hubbard-header-${idx}`;
                                return _jsx(TableCell, { children: item }, key);
                            }) }) }), _jsx(TableBody, { children: values.map((row, idx) => {
                            const key = `hubbard-${idx}`;
                            return (_jsxs(TableRow, { children: [_jsx(TableCell, { children: row.id }), _jsxs(TableCell, { children: [row.atomicSpecies, " (", row.newLabel, ")"] }), _jsx(TableCell, { children: row.orbitalName }), _jsx(TableCell, { children: row.value })] }, key));
                        }) })] })] }));
}
