import type { PropertyHolderSchema } from "@mat3ra/esse/dist/js/types";
import type { PropertiesProveExtraConfig } from "../types";
interface NonScalarsListProps {
    results?: PropertyHolderSchema["data"][];
    extraConfig?: PropertiesProveExtraConfig;
}
export declare function NonScalarsList({ results, extraConfig }: NonScalarsListProps): import("react/jsx-runtime").JSX.Element | null;
export {};
