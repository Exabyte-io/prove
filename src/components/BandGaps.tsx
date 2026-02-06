/* eslint-disable react/no-array-index-key */
import type { BandGapsProperty } from "@mat3ra/prode";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";

import { type BandGapData, BandGap } from "./include/BandGap";
import { type EigenvaluesAtKpointData, EigenvaluesAtKpoint } from "./include/EigenvaluesAtKpoint";
import { type PropertyComponentProps, PropertyComponent } from "./primitive/PropertyComponent";

interface BandGapsProps extends PropertyComponentProps {
    property: BandGapsProperty;
}

export class BandGaps extends PropertyComponent<BandGapsProps> {
    render() {
        const property = this.props.property as any;
        const { eigenvalues = [], values = [] } = property;
        const spins = new Set<number>((values as BandGapData[]).map((gap) => gap.spin || 0));

        return (
            <Box p={4}>
                <Box className="band-gaps">
                    <Typography variant="subtitle2" color="text.primary">
                        Band gap
                    </Typography>
                    <Grid container spacing={3}>
                        {(values as BandGapData[]).map((gap, idx) => {
                            return (
                                <Grid item p={1} xs={12} lg={6} key={`${idx}-${gap.value}`}>
                                    <BandGap data={gap} showSpin={spins.size > 1} />
                                </Grid>
                            );
                        })}
                    </Grid>
                </Box>
                {Boolean(eigenvalues && (eigenvalues as EigenvaluesAtKpointData[]).length) && (
                    <Box p={2} sx={{ overflow: "auto" }}>
                        <EigenvaluesAtKpoint data={eigenvalues as EigenvaluesAtKpointData[]} />
                    </Box>
                )}
            </Box>
        );
    }
}
