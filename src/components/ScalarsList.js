import { PropertyFactory } from "@mat3ra/prode";
import { Utils } from "@mat3ra/utils";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import React from "react";
import s from "underscore.string";

import { getScalarViewConfig } from "../getview";
import { Scalar } from "./primitive/Scalar";

const { numberFormat } = Utils.str;

export class ScalarsList extends React.Component {
    get scalarResults() {
        const scalarResultsNames = PropertyFactory.getScalarPropertyNames();

        return (
            // eslint-disable-next-line react/destructuring-assignment
            this.props.results.filter((x) => {
                return scalarResultsNames.includes(x.name) && Object.keys(x).length > 1;
            }) || []
        );
    }

    render() {
        const widgets = [];
        this.scalarResults.forEach((result) => {
            const config = getScalarViewConfig(result.name);
            const propertyId = s.slugify(result.name);
            if (result.value !== undefined) {
                widgets.push(
                    <Grid item xs={12} sm={6} md={3} key={propertyId} data-tid={propertyId}>
                        <Box mb={2}>
                            <Scalar
                                icon={config.icon}
                                value={numberFormat(result.value, config.decimals)}
                                title={s.humanize(result.name)}
                                units={result.units}
                            />
                        </Box>
                    </Grid>,
                );
            }
        });

        // auto-hide the component if no scalar results
        if (!widgets.length) return null;

        return (
            <Grid container p={4}>
                {widgets}
            </Grid>
        );
    }
}

ScalarsList.propTypes = {
    // eslint-disable-next-line react/require-default-props
    results: PropTypes.array,
};
