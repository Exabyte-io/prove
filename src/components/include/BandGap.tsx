import { Utils } from "@mat3ra/utils";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import s from "underscore.string";

interface ItemProps {
    title: string;
    value: string;
}

function Item({ title, value }: ItemProps) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: isMobile ? "" : "space-between",
            }}
        >
            <Typography
                variant="body2"
                color="text.primary"
                sx={{ width: isMobile ? "50%" : "initial" }}
            >
                {title}
            </Typography>
            <Typography
                variant="body2"
                color="text.primary"
                sx={{ width: isMobile ? "50%" : "initial" }}
            >
                {value}
            </Typography>
        </Box>
    );
}

export interface BandGapData {
    kpointConduction?: [number, number, number];
    kpointValence?: [number, number, number];
    eigenvalueConduction?: number;
    eigenvalueValence?: number;
    spin?: number;
    type: "direct" | "indirect";
    units: string;
    value: number;
}

interface BandGapProps {
    data: BandGapData;
    showSpin?: boolean;
}

export function BandGap({ data: gap, showSpin = false }: BandGapProps) {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Item
                    title={`${s.capitalize(gap.type)} gap (${gap.units}):`}
                    value={Utils.str.numberFormat(gap.value, 3)}
                />
            </Grid>
            {showSpin ? (
                <Grid item xs={12}>
                    <Item title="Spin:" value={Utils.str.numberFormat(gap.spin || 0, 1)} />
                </Grid>
            ) : null}
            {gap.kpointValence ? (
                <Grid item xs={12}>
                    <Item
                        title="Valence Kpoint:"
                        value={Utils.str.numberPadArray(gap.kpointValence)}
                    />
                </Grid>
            ) : null}
            {gap.kpointConduction ? (
                <Grid item xs={12}>
                    <Item
                        title="Conduction Kpoint:"
                        value={Utils.str.numberPadArray(gap.kpointConduction)}
                    />
                </Grid>
            ) : null}
            {gap.eigenvalueValence ? (
                <Grid item xs={12}>
                    <Item
                        title={`Highest Eigenvalue of Valence Band (${gap.units}):`}
                        value={Utils.str.numberFormat(gap.eigenvalueValence, 3)}
                    />
                </Grid>
            ) : null}
            {gap.eigenvalueConduction ? (
                <Grid item xs={12}>
                    <Item
                        title={`Lowest Eigenvalue of Conduction Band (${gap.units}):`}
                        value={Utils.str.numberFormat(gap.eigenvalueConduction, 3)}
                    />
                </Grid>
            ) : null}
        </Grid>
    );
}
