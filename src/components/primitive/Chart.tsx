import { getUUID } from "@mat3ra/code/dist/js/utils";
import React from "react";

import { ReactHighchartsResizable } from "../charts/ReactHighchartsResizable";

interface ChartProps {
    config?: object;
    title?: string;
    idGenerator?: () => string;
}

export function Chart({ config = {}, title = "", idGenerator = getUUID }: ChartProps) {
    return (
        <ReactHighchartsResizable
            config={config}
            domProps={{
                id: `${title || "chart"}-${idGenerator()}`,
            }}
        />
    );
}
