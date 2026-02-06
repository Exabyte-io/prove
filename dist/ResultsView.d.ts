import type { PropertyHolderSchema } from "@mat3ra/esse/dist/js/types";
import React from "react";
import type { PropertiesProveExtraConfig } from "./types";
interface ResultsViewProps {
    results?: PropertyHolderSchema["data"][];
    extraConfig?: PropertiesProveExtraConfig;
}
export declare const ResultsView: React.FC<ResultsViewProps>;
export {};
