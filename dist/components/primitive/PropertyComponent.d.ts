import React from "react";
export interface PropertyComponentProps {
    property?: any;
    data?: any;
    title?: string;
    context?: any;
    extraConfig?: any;
}
export declare class PropertyComponent<P extends PropertyComponentProps = PropertyComponentProps> extends React.Component<P> {
    context: any;
    constructor(props: P);
    render(): React.ReactNode;
}
