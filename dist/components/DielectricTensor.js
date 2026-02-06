import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Chart } from "./primitive/Chart";
// TODO: migrate to use generic data type class instead
export function DielectricTensor({ property }) {
    const { name, chartConfig } = property;
    const configs = chartConfig || [];
    return (_jsx(_Fragment, { children: configs.map((config, index) => {
            const key = `${name}-${index}`;
            return _jsx(Chart, { config: config, title: name }, key);
        }) }));
}
