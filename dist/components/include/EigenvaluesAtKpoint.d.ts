import React from "react";
interface EigenvalueData {
    spin?: number;
    energies?: number[];
    occupations?: number[];
}
export interface EigenvaluesAtKpointData {
    kpoint?: [number, number, number];
    weight?: number;
    eigenvalues?: EigenvalueData[];
}
interface EigenvaluesAtKpointProps {
    data?: EigenvaluesAtKpointData[];
}
interface EigenvaluesAtKpointState {
    isExpanded: boolean;
}
export declare class EigenvaluesAtKpoint extends React.Component<EigenvaluesAtKpointProps, EigenvaluesAtKpointState> {
    constructor(props: EigenvaluesAtKpointProps);
    renderEigenvaluesAtKpoint(eigenvalues: EigenvaluesAtKpointData): React.ReactElement<any, string | React.JSXElementConstructor<any>>[];
    renderAllKpoints(): React.ReactElement<any, string | React.JSXElementConstructor<any>>[][];
    renderSwitch(): import("react/jsx-runtime").JSX.Element;
    render(): import("react/jsx-runtime").JSX.Element;
}
export {};
