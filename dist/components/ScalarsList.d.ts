import type { PropertyHolderSchema } from "@mat3ra/esse/dist/js/types";
import React from "react";
type PropertyData = PropertyHolderSchema["data"];
type ScalarPropertyData = PropertyData & {
    value?: number;
    units?: string;
};
interface ScalarsListProps {
    results?: PropertyData[];
}
export declare class ScalarsList extends React.Component<ScalarsListProps> {
    get scalarResults(): ScalarPropertyData[];
    render(): import("react/jsx-runtime").JSX.Element | null;
}
export {};
