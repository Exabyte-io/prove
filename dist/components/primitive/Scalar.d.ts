import React from "react";
interface ScalarProps {
    value: string | number;
    icon: string;
    title: string;
    units?: string;
}
export declare function Scalar({ icon, title, units, value }: ScalarProps): React.JSX.Element;
export {};
