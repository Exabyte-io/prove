import React from "react";
export class PropertyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.context = props.context; // making context non-reactive
    }
    render() {
        return null;
    }
}
