import { ReciprocalLattice } from "@mat3ra/made";
import { PropertyName } from "@mat3ra/prode";

type SupportedProperty = { name?: string; xDataArray?: unknown };

function getLattice(material: any) {
    return material?.lattice || material?._json?.lattice;
}

export function calculatePointsPath(material: any, property: SupportedProperty) {
    if (
        ![PropertyName.band_structure, PropertyName.phonon_dispersions].includes(
            property?.name as any,
        )
    ) {
        return undefined;
    }

    const lattice = getLattice(material);
    if (!lattice || !property?.xDataArray) return undefined;

    const rl = new ReciprocalLattice(lattice);
    return rl.extractKpointPath(property.xDataArray as any);
}
