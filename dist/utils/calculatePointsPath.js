import { ReciprocalLattice } from "@mat3ra/made";
import { PropertyName } from "@mat3ra/prode";
function getLattice(material) {
    var _a;
    return (material === null || material === void 0 ? void 0 : material.lattice) || ((_a = material === null || material === void 0 ? void 0 : material._json) === null || _a === void 0 ? void 0 : _a.lattice);
}
export function calculatePointsPath(material, property) {
    if (![PropertyName.band_structure, PropertyName.phonon_dispersions].includes(property.name)) {
        return undefined;
    }
    const lattice = getLattice(material);
    if (!lattice || !property.xDataArray)
        return undefined;
    const rl = new ReciprocalLattice(lattice);
    return rl.extractKpointPath(property.xDataArray);
}
