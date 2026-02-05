import type { BandGapsProperty } from "@mat3ra/prode";
import { type PropertyComponentProps, PropertyComponent } from "./primitive/PropertyComponent";
interface BandGapsProps extends PropertyComponentProps {
    property: BandGapsProperty;
}
export declare class BandGaps extends PropertyComponent<BandGapsProps> {
    render(): import("react/jsx-runtime").JSX.Element;
}
export {};
