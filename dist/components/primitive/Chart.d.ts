import React from "react";
interface ChartProps {
    config?: object;
    title?: string;
    idGenerator?: () => string;
}
export declare function Chart({ config, title, idGenerator }: ChartProps): React.JSX.Element;
export {};
