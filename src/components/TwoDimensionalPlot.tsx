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
}

export function TwoDimensionalPlot({ property }: TwoDimensionalPlotProps) {
    const { chartConfig, name } = property;

    return <Chart config={chartConfig} title={name} />;
}
