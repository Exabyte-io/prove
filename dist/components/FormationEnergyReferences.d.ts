import type { FormationEnergyReferencesProperty } from "@mat3ra/prode";
import type { PropertyComponentProps } from "./primitive/PropertyComponent";
export interface FormationEnergyReferencesRow {
    label: string;
    total_energy?: number | null;
    n_atoms?: number | null;
    total_energy_per_atom?: number | null;
    precision_value?: number | null;
    precision_metric?: string | null;
}
interface FormationEnergyReferencesProps extends PropertyComponentProps {
    property: FormationEnergyReferencesProperty;
}
export declare function FormationEnergyReferences({ property }: FormationEnergyReferencesProps): import("react/jsx-runtime").JSX.Element | null;
export {};
