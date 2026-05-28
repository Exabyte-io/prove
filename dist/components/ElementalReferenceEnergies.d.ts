import type { ElementalReferenceEnergiesProperty } from "@mat3ra/prode";
import type { PropertyComponentProps } from "./primitive/PropertyComponent";
export interface FormationEnergyVerificationRow {
    label: string;
    total_energy?: number | null;
    n_atoms?: number | null;
    total_energy_per_atom?: number | null;
    precision_value?: number | null;
    precision_metric?: string | null;
}
interface ElementalReferenceEnergiesProps extends PropertyComponentProps {
    property: ElementalReferenceEnergiesProperty;
    title?: string;
}
export declare function ElementalReferenceEnergies({ property, title }: ElementalReferenceEnergiesProps): import("react/jsx-runtime").JSX.Element | null;
export {};
