import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import React from "react";

import { PropertyComponent } from "./primitive/PropertyComponent";

export class HubbardU extends PropertyComponent {
    render() {
        const { values = [] } = this.props.property;
        const headers = ["Site no.", "Atomic species (new label)", "Orbital/manifold", "U (eV)"];
        return (
            <Box p={4} sx={{ overflow: "scroll" }}>
                <Typography variant="subtitle2" color="text.primary">
                    Hubbard U parameters
                </Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            {headers.map((item, idx) => {
                                const key = `hubbard-header-${idx}`;
                                return <TableCell key={key}>{item}</TableCell>;
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {values.map((row, idx) => {
                            const key = `hubbard-${idx}`;
                            return (
                                <TableRow key={key}>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>
                                        {row.atomicSpecies} ({row.newLabel})
                                    </TableCell>
                                    <TableCell>{row.orbitalName}</TableCell>
                                    <TableCell>{row.value}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Box>
        );
    }
}
