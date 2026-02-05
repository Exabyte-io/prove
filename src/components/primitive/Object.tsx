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

function toFixed(number: number | string, precision = 3) {
    if (_.isNumber(number)) {
        return number.toFixed(precision);
    }
    return number;
}

interface OneLevelObjectProps {
    data: any;
    title?: string;
    property?: Property;
}

export function OneLevelObject({ title, data, property }: OneLevelObjectProps) {
    const defaultTitle = React.useMemo(() => {
        if (property) {
            return new Property(property).prettyName;
        }
        return undefined;
    }, [property]);

    const { headers, values } = React.useMemo(() => {
        const headersArray: React.ReactElement[] = [];
        const valuesArray: React.ReactElement[] = [];

        if (!data) {
            return { headers: headersArray, values: valuesArray };
        }

        const keys = Object.keys(data);

        keys.forEach((key) => {
            if (data[key] && data[key].value) {
                headersArray.push(
                    <TableCell key={`${key}-name`}>
                        {`${s.humanize(data[key].name)} (${data.units || ""})`}
                    </TableCell>,
                );
                valuesArray.push(
                    <TableCell key={`${key}-value`}>{toFixed(data[key].value)}</TableCell>,
                );
            }
        });

        return { headers: headersArray, values: valuesArray };
    }, [data]);

    return (
        <Box p={4} sx={{ overflow: "auto" }}>
            <Typography variant="subtitle2" color="text.primary">
                {title || defaultTitle}
            </Typography>
            <Table>
                <TableHead>
                    <TableRow>{headers}</TableRow>
                </TableHead>
                <TableBody>{values}</TableBody>
            </Table>
        </Box>
    );
}
