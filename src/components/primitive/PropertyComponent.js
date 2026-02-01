/* eslint-disable react/no-unused-prop-types */
import PropTypes from "prop-types";
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

PropertyComponent.propTypes = {
    property: PropTypes.object,
    data: PropTypes.object,
    title: PropTypes.string,
    context: PropTypes.object,
};

PropertyComponent.defaultProps = {
    property: {},
    data: {},
    title: "",
    context: {},
};

