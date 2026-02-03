import React from "react";

import { ScalarsList } from "./ScalarsList";

interface PropertyResult {
    name: string;
    value?: number;
    units?: string;
}

interface ResultsViewProps {
    results?: PropertyResult[];
}

export const ResultsView: React.FC<ResultsViewProps> = ({ results = [] }) => {
    return <ScalarsList results={results} />;
};

