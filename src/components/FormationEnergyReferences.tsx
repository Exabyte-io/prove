import type { FormationEnergyReferencesProperty } from "@mat3ra/prode";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import React from "react";

import type { PropertyComponentProps } from "./primitive/PropertyComponent";

export interface FormationEnergyReferencesRow {
    label: string;
    total_energy?: number | null;
    n_atoms?: number | null;
    total_energy_per_atom?: number | null;
    precision_value?: number | null;
    precision_metric?: string | null;
}

interface FormationEnergyReferencesProps extends PropertyComponentProps {
    property: FormationEnergyReferencesProperty;
}

function formatNumber(value: number | null | undefined, decimals: number) {
    if (value == null || Number.isNaN(value)) {
        return "—";
    }
    return value.toFixed(decimals);
}

function formatPrecision(row: FormationEnergyReferencesRow) {
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

export function FormationEnergyReferences({ property }: FormationEnergyReferencesProps) {
    const rows = property.value?.rows ?? [];

    if (!rows.length) {
        return null;
    }

    return (
        <Box p={4} sx={{ overflow: "auto" }}>
            <Typography variant="subtitle2" color="text.primary" gutterBottom>
                Formation energy references
            </Typography>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Material</TableCell>
                        <TableCell align="right">Total energy (eV)</TableCell>
                        <TableCell align="right">N atoms</TableCell>
                        <TableCell align="right">Total energy per atom (eV/atom)</TableCell>
                        <TableCell>Precision</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row: FormationEnergyReferencesRow) => (
                        <TableRow key={row.label}>
                            <TableCell>{row.label}</TableCell>
                            <TableCell align="right">{formatNumber(row.total_energy, 6)}</TableCell>
                            <TableCell align="right">{formatNumber(row.n_atoms, 0)}</TableCell>
                            <TableCell align="right">
                                {formatNumber(row.total_energy_per_atom, 3)}
                            </TableCell>
                            <TableCell>{formatPrecision(row)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Box>
    );
}
