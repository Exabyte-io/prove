import type {
    AveragePotentialProfileProperty,
    BandStructureProperty,
    ChargeDensityProfileProperty,
    DensityOfStatesProperty,
    PhononDispersionsProperty,
    PhononDOSProperty,
    PotentialProfileProperty,
    ReactionEnergyProfileProperty,
} from "@mat3ra/prode";
import React from "react";

import { Chart } from "./primitive/Chart";

interface TwoDimensionalPlotProps {
    property:
        | AveragePotentialProfileProperty
        | BandStructureProperty
        | ChargeDensityProfileProperty
        | DensityOfStatesProperty
        | PhononDispersionsProperty
        | PhononDOSProperty
        | PotentialProfileProperty
        | ReactionEnergyProfileProperty;
    title?: string;
}

export function TwoDimensionalPlot({ property, title }: TwoDimensionalPlotProps) {
    const { chartConfig, name } = property;

    return <Chart config={chartConfig} title={title || name} />;
}
