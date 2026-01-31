import type { AtomicForcesProperty, MagneticMomentsProperty, StressTensorProperty } from "@mat3ra/prode";
import React from "react";
type TensorProperty = StressTensorProperty | MagneticMomentsProperty | AtomicForcesProperty;
type TensorProps = {
    property: TensorProperty;
    title: string;
};
export declare function Tensor({ property, title }: TensorProps): React.JSX.Element;
export {};
