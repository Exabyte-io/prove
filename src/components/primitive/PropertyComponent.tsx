import React from "react";

export interface PropertyComponentProps {
    property?: any;
    data?: any;
    title?: string;
    context?: any;
    extraConfig?: any;
}

export class PropertyComponent<
    P extends PropertyComponentProps = PropertyComponentProps,
> extends React.Component<P> {
    context: any;

    constructor(props: P) {
        super(props);
        this.context = props.context; // making context non-reactive
    }

    render(): React.ReactNode {
        return null;
    }
}
