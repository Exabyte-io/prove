import type { AveragePotentialProfileProperty, BandStructureProperty, ChargeDensityProfileProperty, DensityOfStatesProperty, PhononDispersionsProperty, PhononDOSProperty, PotentialProfileProperty, ReactionEnergyProfileProperty } from "@mat3ra/prode";
interface TwoDimensionalPlotProps {
    property: AveragePotentialProfileProperty | BandStructureProperty | ChargeDensityProfileProperty | DensityOfStatesProperty | PhononDispersionsProperty | PhononDOSProperty | PotentialProfileProperty | ReactionEnergyProfileProperty;
}
export declare function TwoDimensionalPlot({ property }: TwoDimensionalPlotProps): import("react/jsx-runtime").JSX.Element;
export {};
