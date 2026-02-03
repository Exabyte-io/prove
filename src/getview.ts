import { PropertyName } from "@mat3ra/prode";

type ViewConfig = {
    icon?: string;
    title?: string;
    color?: string;
    decimals?: number;
};

export type PropertyWithConfig =
    | PropertyName.pressure
    | PropertyName.total_force
    | PropertyName.total_energy
    | PropertyName.surface_energy
    | PropertyName.fermi_energy
    | PropertyName.reaction_energy_barrier
    | PropertyName.zero_point_energy
    | PropertyName.atomic_constraints
    | PropertyName.jupyter_notebook_endpoint
    | PropertyName.is_relaxed
    | PropertyName.valence_band_offset;

const PROPERTY_VIEWS: Record<PropertyWithConfig, ViewConfig> = {
    [PropertyName.pressure]: {
        icon: "entities.property.pressure",
        title: "Pressure",
        color: "white",
        decimals: 0,
    },
    [PropertyName.total_force]: {
        icon: "entities.property.force",
        title: "Total force",
        color: "white",
        decimals: 6,
    },
    [PropertyName.total_energy]: {
        icon: "entities.property.energy",
        title: "Total energy",
        color: "white",
        decimals: 3,
    },
    [PropertyName.surface_energy]: {
        icon: "entities.property.energy",
        title: "Surface energy",
        color: "white",
        decimals: 3,
    },
    [PropertyName.fermi_energy]: {
        icon: "entities.property.fermiEnergy",
        title: "Fermi energy",
        color: "white",
        decimals: 3,
    },
    [PropertyName.zero_point_energy]: {
        icon: "entities.property.energy",
        title: "Zero point energy",
        color: "white",
        decimals: 3,
    },
    [PropertyName.reaction_energy_barrier]: {
        icon: "entities.property.energy",
        title: "Reaction Energy Barrier",
        color: "white",
        decimals: 3,
    },
    [PropertyName.valence_band_offset]: {
        icon: "entities.property.bandGap",
        title: "Valence Band Offset",
        color: "white",
        decimals: 3,
    },
    [PropertyName.atomic_constraints]: {},
    [PropertyName.is_relaxed]: {},
    [PropertyName.jupyter_notebook_endpoint]: {},
};

/**
 * The property view for scalars does not contain a component attribute.
 * This function makes sure the right view config is returned for a scalar property.
 * @summary Safely return view config for scalar properties.
 */
export function getScalarViewConfig(propertyName: PropertyWithConfig) {
    return PROPERTY_VIEWS[propertyName];
}
