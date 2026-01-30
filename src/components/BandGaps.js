/* eslint-disable react/no-array-index-key */
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";

import { BandGap } from "./include/BandGap";
import { EigenvaluesAtKpoint } from "./include/EigenvaluesAtKpoint";
import { PropertyComponent } from "./primitive/PropertyComponent";

// TODO: migrate to use generic data type class instead
export class BandGaps extends PropertyComponent {
    render() {
        const { eigenvalues, values = [] } = this.props.property;
        const spins = new Set(values.map((gap) => gap.spin));
        return (
            <Box p={4}>
                <Box className="band-gaps">
                    <Typography variant="subtitle2" color="text.primary">
                        Band gap
                    </Typography>
                    <Grid container spacing={3}>
                        {(values || []).map((gap, idx) => {
                            return (
                                <Grid item p={1} xs={12} lg={6} key={`${idx}-${gap.value}`}>
                                    <BandGap data={gap} showSpin={spins.size > 1} />
                                </Grid>
                            );
                        })}
                    </Grid>
                </Box>
                {Boolean(eigenvalues && eigenvalues.length) && (
                    <Box p={2} sx={{ overflow: "auto" }}>
                        <EigenvaluesAtKpoint data={eigenvalues} />
                    </Box>
                )}
            </Box>
        );
    }
}
