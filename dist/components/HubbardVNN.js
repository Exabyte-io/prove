import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
export function HubbardVNN({ property }) {
    let { values = [] } = property;
    // filter out empty objects from the array e.g., [{}] => []
    values = values.filter((item) => Object.keys(item).length !== 0);
    const headers = [
        "Site no. 1",
        "Atom 1",
        "Orbital 1",
        "Site no. 2",
        "Atom 2",
        "Orbital 2",
        "V (eV)",
    ];
    return values.length > 0 ? (_jsxs(Box, { p: 4, sx: { overflow: "scroll" }, children: [_jsx(Typography, { variant: "subtitle2", color: "text.primary", children: "Hubbard V parameters (nearest neighbors)" }), _jsxs(Table, { children: [_jsx(TableHead, { children: _jsx(TableRow, { children: headers.map((item, idx) => {
                                const key = `hubbard-v-nn-header-${idx}`;
                                return _jsx(TableCell, { children: item }, key);
                            }) }) }), _jsx(TableBody, { children: values.map((row, idx) => {
                            const key = `hubbard-v-nn-${idx}`;
                            return (_jsxs(TableRow, { children: [_jsx(TableCell, { children: row.id }), _jsx(TableCell, { children: row.atomicSpecies }), _jsx(TableCell, { children: row.orbitalName }), _jsx(TableCell, { children: row.id2 }), _jsx(TableCell, { children: row.atomicSpecies2 }), _jsx(TableCell, { children: row.orbitalName2 }), _jsx(TableCell, { children: row.value })] }, key));
                        }) })] })] })) : null;
}
