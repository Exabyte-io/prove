import { PropertyName } from "@mat3ra/prode";
import React from "react";
import type { PropertyData } from "../types";
type ScalarPropertyData = Extract<PropertyData, {
    value: number;
}>;
interface ScalarsListProps {
    results?: PropertyData[];
}
export declare class ScalarsList extends React.Component<ScalarsListProps> {
    isScalarPropertyData(data: PropertyData, scalarResultsNames: PropertyName[]): data is ScalarPropertyData;
    get scalarResults(): ScalarPropertyData[];
    render(): import("react/jsx-runtime").JSX.Element | null;
}
export {};
