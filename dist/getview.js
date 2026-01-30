"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getScalarViewConfig = getScalarViewConfig;
var _prode = require("@mat3ra/prode");
// including names of components separately

const PROPERTY_VIEWS = {
  [_prode.PropertyName.pressure]: {
    icon: "entities.property.pressure",
    title: "Pressure",
    color: "white",
    decimals: 0
  },
  [_prode.PropertyName.total_force]: {
    icon: "entities.property.force",
    title: "Total force",
    color: "white",
    decimals: 6
  },
  [_prode.PropertyName.total_energy]: {
    icon: "entities.property.energy",
    title: "Total energy",
    color: "white",
    decimals: 3
  },
  [_prode.PropertyName.surface_energy]: {
    icon: "entities.property.energy",
    title: "Surface energy",
    color: "white",
    decimals: 3
  },
  [_prode.PropertyName.fermi_energy]: {
    icon: "entities.property.fermiEnergy",
    title: "Fermi energy",
    color: "white",
    decimals: 3
  },
  [_prode.PropertyName.zero_point_energy]: {
    icon: "entities.property.energy",
    title: "Zero point energy",
    color: "white",
    decimals: 3
  },
  [_prode.PropertyName.reaction_energy_barrier]: {
    icon: "entities.property.energy",
    title: "Reaction Energy Barrier",
    color: "white",
    decimals: 3
  },
  [_prode.PropertyName.valence_band_offset]: {
    icon: "entities.property.bandGap",
    title: "Valence Band Offset",
    color: "white",
    decimals: 3
  },
  [_prode.PropertyName.atomic_constraints]: {},
  [_prode.PropertyName.is_relaxed]: {},
  [_prode.PropertyName.jupyter_notebook_endpoint]: {}
};

/**
 * The property view for scalars does not contain a component attribute.
 * This function makes sure the right view config is returned for a scalar property.
 * @summary Safely return view config for scalar properties.
 */
function getScalarViewConfig(propertyName) {
  return PROPERTY_VIEWS[propertyName];
}