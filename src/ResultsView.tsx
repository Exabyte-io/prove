import React from "react";

import { NonScalarsList } from "./components/NonScalarsList";
import { ScalarsList } from "./components/ScalarsList";
import type { PropertiesProveExtraConfig, PropertyData } from "./types";

interface ResultsViewProps {
    results?: PropertyData[];
    extraConfig?: PropertiesProveExtraConfig;
}

export const ResultsView: React.FC<ResultsViewProps> = ({ results = [], extraConfig }) => {
    return (
        <>
            <ScalarsList results={results} />
            <NonScalarsList results={results} extraConfig={extraConfig} />
        </>
    );
};
