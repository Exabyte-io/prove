import React from "react";
interface PropertyResult {
    name: string;
    value?: number;
    units?: string;
}
interface ResultsViewProps {
    results?: PropertyResult[];
}
export declare const ResultsView: React.FC<ResultsViewProps>;
export {};
