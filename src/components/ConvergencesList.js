/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-prototype-builtins */
import { PropertyFactory } from "@mat3ra/prode";
import PropTypes from "prop-types";
import React from "react";
import s from "underscore.string";

import { Chart } from "./primitive/Chart";

export class ConvergencesList extends React.Component {
    render() {
        const monitorComponents = [];
        const { monitors, idGenerator } = this.props;
        const convergencePropertyNames = PropertyFactory.getConvergencePropertyNames();

        monitors.forEach((monitor) => {
            if (convergencePropertyNames.includes(monitor.name)) {
                const property = PropertyFactory.createProperty(monitor);
                const config = property.chartConfig;
                const propertyId = s.slugify(this.idPrefix + " " + monitor.name);
                monitorComponents.push(
                    <Chart
                        config={config}
                        key={propertyId}
                        title={s.humanize(monitor.name)}
                        idGenerator={idGenerator}
                    />,
                );
            }
        });

        return (
            <div className="convergences-list">
                {monitorComponents.length > 0 ? (
                    <div className="col-xs-12 p-l-0 p-r-0">{monitorComponents}</div>
                ) : null}
            </div>
        );
    }
}

ConvergencesList.propTypes = {
    idPrefix: PropTypes.string.isRequired,
    monitors: PropTypes.array,
    idGenerator: PropTypes.func,
};
