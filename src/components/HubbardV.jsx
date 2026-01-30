import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import React from "react";

import { PropertyComponent } from "./primitive/PropertyComponent";

export class HubbardV extends PropertyComponent {
    render() {
        let { values = [] } = this.props.property;
        // filter out empty objects from the array e.g., [{}] => []
        values = values.filter((item) => Object.keys(item).length !== 0);
        const headers = [
            "Site no. 1",
            "Atom 1",
            "Orbital 1",
            "Site no. 2",
            "Atom 2",
            "Orbital 2",
            "Distance (Bohr)",
            "V (eV)",
        ];
        return values.length > 0 ? (
            <Box p={4} sx={{ overflow: "scroll" }}>
                <Typography variant="subtitle2" color="text.primary">
                    Hubbard V parameters (all neighbors in 3x3x3 supercell)
                </Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            {headers.map((item, idx) => {
                                const key = `hubbard-v-header-${idx}`;
                                return <TableCell key={key}>{item}</TableCell>;
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {values.map((row, idx) => {
                            const key = `hubbard-v-${idx}`;
                            return (
                                <TableRow key={key}>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.atomicSpecies}</TableCell>
                                    <TableCell>{row.orbitalName}</TableCell>
                                    <TableCell>{row.id2}</TableCell>
                                    <TableCell>{row.atomicSpecies2}</TableCell>
                                    <TableCell>{row.orbitalName2}</TableCell>
                                    <TableCell>{row.distance}</TableCell>
                                    <TableCell>{row.value}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Box>
        ) : null;
    }
}

