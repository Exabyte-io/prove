import type { PropertyName } from "@mat3ra/prode";
import { PropertyFactory } from "@mat3ra/prode";
import { Utils } from "@mat3ra/utils";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import s from "underscore.string";

import { getScalarViewConfig } from "../getview";
import type { PropertyData } from "../types";
import { Scalar } from "./primitive/Scalar";

const { numberFormat } = Utils.str;

// NOTE: asserting that the data is a scalar property data
type ScalarPropertyData = Extract<PropertyData, { value: number }>;

interface ScalarsListProps {
    results?: PropertyData[];
}

export class ScalarsList extends React.Component<ScalarsListProps> {
    isScalarPropertyData(
        data: PropertyData,
        scalarResultsNames: PropertyName[],
    ): data is ScalarPropertyData {
        if (!scalarResultsNames.includes(data.name as PropertyName)) return false;
        if (!("value" in data) || typeof data.value !== "number") return false;
        return Object.keys(data).length > 1;
    }

    get scalarResults(): ScalarPropertyData[] {
        const scalarResultsNames = PropertyFactory.getScalarPropertyNames();

        return (
            this.props.results?.filter((x): x is ScalarPropertyData =>
                this.isScalarPropertyData(x, scalarResultsNames),
            ) || []
        );
    }

    render() {
        const widgets: JSX.Element[] = [];
        this.scalarResults.forEach((result) => {
            const config = getScalarViewConfig(result.name as PropertyName) || {};
            const propertyId = s.slugify(result.name);
            let units: string | undefined;
            if ("units" in result) units = result.units;
            if (config) {
                widgets.push(
                    <Grid item xs={12} sm={6} md={3} key={propertyId} data-tid={propertyId}>
                        <Box mb={2}>
                            <Scalar
                                icon={config.icon || ""}
                                value={numberFormat(result.value, config.decimals)}
                                title={s.humanize(result.name)}
                                units={units}
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
