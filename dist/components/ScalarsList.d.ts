import React from "react";
interface PropertyResult {
    name: string;
    value?: number;
    units?: string;
}
interface ScalarsListProps {
    results?: PropertyResult[];
}
export declare class ScalarsList extends React.Component<ScalarsListProps> {
    get scalarResults(): PropertyResult[];
    render(): import("react/jsx-runtime").JSX.Element | null;
}
export {};
