import type { Material } from "@mat3ra/made";
import { ReciprocalLattice } from "@mat3ra/made";
import { KPointCoordinates } from "@mat3ra/made/dist/js/lattice/reciprocal/lattice_reciprocal";
import { PropertyName } from "@mat3ra/prode";

type SupportedProperty = { name: PropertyName; xDataArray?: KPointCoordinates[] };

function getLattice(material: Material) {
    return material?.lattice || material?._json?.lattice;
}

export function calculatePointsPath(material: Material, property: SupportedProperty) {
    if (![PropertyName.band_structure, PropertyName.phonon_dispersions].includes(property.name)) {
        return undefined;
    }

    const lattice = getLattice(material);
    if (!lattice || !property.xDataArray) return undefined;

    const reciprocalLattice = new ReciprocalLattice(lattice);
    return reciprocalLattice.extractKpointPath(property.xDataArray);
}
