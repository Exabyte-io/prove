/* eslint-disable react/no-unused-prop-types */
import PropTypes from "prop-types";
import React from "react";

export class PropertyComponent extends React.Component {
    constructor(props) {
        super(props);
        // eslint-disable-next-line react/no-unused-class-component-methods
        this.context = props.context; // making context non-reactive
    }

    render() {
        return null;
    }
}

PropertyComponent.propTypes = {
    property: PropTypes.object, // {Property} class instance
    data: PropTypes.object, // "pure" object, or property config
    title: PropTypes.string,
    context: PropTypes.object,
};

PropertyComponent.defaultProps = {
    property: {},
    data: {},
    title: "",
    context: {},
};
