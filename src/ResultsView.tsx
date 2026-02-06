import type { PropertyHolderSchema } from "@mat3ra/esse/dist/js/types";
import React from "react";

import { NonScalarsList } from "./components/NonScalarsList";
import { ScalarsList } from "./components/ScalarsList";
import type { PropertiesProveExtraConfig } from "./types";

interface ResultsViewProps {
    results?: PropertyHolderSchema["data"][];
    extraConfig?: PropertiesProveExtraConfig;
}

export const ResultsView: React.FC<ResultsViewProps> = ({ results = [], extraConfig }) => {
    return (
        <>
            <ScalarsList results={results as any} />
            <NonScalarsList results={results} extraConfig={extraConfig} />
        </>
    );
};
