import { jsx as _jsx } from "react/jsx-runtime";
import { Chart } from "./primitive/Chart";
export function TwoDimensionalPlot({ property }) {
    const { chartConfig, name } = property;
    return _jsx(Chart, { config: chartConfig, title: name });
}
