import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import React, { ReactElement } from "react";

interface HubbardVNNProps {
    property: any;
}

export function HubbardVNN({ property }: HubbardVNNProps): ReactElement | null {
    let { values = [] } = property as { values: any[] };
    // filter out empty objects from the array e.g., [{}] => []
    values = values.filter((item: any) => Object.keys(item).length !== 0);

    const headers = [
        "Site no. 1",
        "Atom 1",
        "Orbital 1",
        "Site no. 2",
        "Atom 2",
        "Orbital 2",
        "V (eV)",
    ];

    return values.length > 0 ? (
        <Box p={4} sx={{ overflow: "scroll" }}>
            <Typography variant="subtitle2" color="text.primary">
                Hubbard V parameters (nearest neighbors)
            </Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        {headers.map((item, idx) => {
                            const key = `hubbard-v-nn-header-${idx}`;
                            return <TableCell key={key}>{item}</TableCell>;
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {values.map((row: any, idx: number) => {
                        const key = `hubbard-v-nn-${idx}`;
                        return (
                            <TableRow key={key}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.atomicSpecies}</TableCell>
                                <TableCell>{row.orbitalName}</TableCell>
                                <TableCell>{row.id2}</TableCell>
                                <TableCell>{row.atomicSpecies2}</TableCell>
                                <TableCell>{row.orbitalName2}</TableCell>
                                <TableCell>{row.value}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Box>
    ) : null;
}
