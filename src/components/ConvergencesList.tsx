import type { PropertyName } from "@mat3ra/prode";
import { PropertyFactory } from "@mat3ra/prode";
import React, { ReactElement } from "react";
import s from "underscore.string";

import type { PropertyData } from "../types";
import { Chart } from "./primitive/Chart";

interface ConvergencesListProps {
    idPrefix: string;
    monitors?: PropertyData[];
    idGenerator?: () => string;
}

export function ConvergencesList({
    idPrefix,
    monitors = [],
    idGenerator,
}: ConvergencesListProps): ReactElement {
    const convergencePropertyNames = PropertyFactory.getConvergencePropertyNames();

    const monitorComponents: ReactElement[] = monitors
        .filter((monitor) => convergencePropertyNames.includes(monitor.name as PropertyName))
        .map((monitor) => {
            const property = PropertyFactory.createProperty(monitor);
            const rawConfig = (property as { chartConfig?: unknown }).chartConfig;

            const config =
                rawConfig && typeof rawConfig === "object" ? (rawConfig as object) : undefined;
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
