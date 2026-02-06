import type { AtomicForcesProperty, MagneticMomentsProperty, StressTensorProperty } from "@mat3ra/prode";
type TensorProperty = StressTensorProperty | MagneticMomentsProperty | AtomicForcesProperty;
type TensorProps = {
    property: TensorProperty;
    title: string;
};
export declare function Tensor({ property, title }: TensorProps): import("react/jsx-runtime").JSX.Element;
export {};
