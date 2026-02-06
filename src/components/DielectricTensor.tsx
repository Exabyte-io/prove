import type { DielectricTensorProperty } from "@mat3ra/prode";
import React from "react";

import { Chart } from "./primitive/Chart";

// TODO: migrate to use generic data type class instead
export function DielectricTensor({ property }: { property: DielectricTensorProperty }) {
    const { name, chartConfig } = property;
    const configs = chartConfig || [];

    return (
        <>
            {configs.map((config, index) => {
                const key = `${name}-${index}`;
                return <Chart config={config} title={name} key={key} />;
            })}
        </>
    );
}
