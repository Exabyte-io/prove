import type { AveragePotentialProfileProperty, BandStructureProperty, ChargeDensityProfileProperty, DensityOfStatesProperty, PhononDispersionsProperty, PhononDOSProperty, PotentialProfileProperty, ReactionEnergyProfileProperty } from "@mat3ra/prode";
import React from "react";
interface TwoDimensionalPlotProps {
    property: AveragePotentialProfileProperty | BandStructureProperty | ChargeDensityProfileProperty | DensityOfStatesProperty | PhononDispersionsProperty | PhononDOSProperty | PotentialProfileProperty | ReactionEnergyProfileProperty;
    title?: string;
}
export declare function TwoDimensionalPlot({ property, title }: TwoDimensionalPlotProps): React.JSX.Element;
export {};
