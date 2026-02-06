import { jsx as _jsx } from "react/jsx-runtime";
import { PropertyFactory } from "@mat3ra/prode";
import s from "underscore.string";
import { Chart } from "./primitive/Chart";
export function ConvergencesList({ idPrefix, monitors = [], idGenerator, }) {
    const convergencePropertyNames = PropertyFactory.getConvergencePropertyNames();
    const monitorComponents = monitors
        .filter((monitor) => convergencePropertyNames.includes(monitor.name))
        .map((monitor) => {
        const property = PropertyFactory.createProperty(monitor);
        const config = property.chartConfig;
        const propertyId = s.slugify(idPrefix + " " + monitor.name);
        return (_jsx(Chart, { config: config, title: s.humanize(monitor.name), idGenerator: idGenerator }, propertyId));
    });
    return (_jsx("div", { className: "convergences-list", children: monitorComponents.length > 0 ? (_jsx("div", { className: "col-xs-12 p-l-0 p-r-0", children: monitorComponents })) : null }));
}
