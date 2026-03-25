import React from "react";
import type { PropertiesProveExtraConfig, PropertyData } from "./types";
interface ResultsViewProps {
    results?: PropertyData[];
    extraConfig?: PropertiesProveExtraConfig;
}
export declare const ResultsView: React.FC<ResultsViewProps>;
export {};
