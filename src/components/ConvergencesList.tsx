import type { PropertyHolderSchema } from "@mat3ra/esse/dist/js/types";
import { PropertyFactory } from "@mat3ra/prode";
import React, { ReactElement } from "react";
import s from "underscore.string";

import { Chart } from "./primitive/Chart";

interface ConvergencesListProps {
    idPrefix: string;
    monitors?: PropertyHolderSchema["data"][];
    idGenerator?: () => string;
}

export function ConvergencesList({
    idPrefix,
    monitors = [],
    idGenerator,
}: ConvergencesListProps): ReactElement {
    const convergencePropertyNames = PropertyFactory.getConvergencePropertyNames();

    const monitorComponents: ReactElement[] = monitors
        .filter((monitor) => convergencePropertyNames.includes(monitor.name as any))
        .map((monitor) => {
            const property = PropertyFactory.createProperty(monitor);
            const config = (property as any).chartConfig;
            const propertyId = s.slugify(idPrefix + " " + monitor.name);
            return (
                <Chart
                    config={config}
                    key={propertyId}
                    title={s.humanize(monitor.name)}
                    idGenerator={idGenerator}
                />
            );
        });

    return (
        <div className="convergences-list">
            {monitorComponents.length > 0 ? (
                <div className="col-xs-12 p-l-0 p-r-0">{monitorComponents}</div>
            ) : null}
        </div>
    );
}
