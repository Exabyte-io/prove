import { Material } from "@mat3ra/made";
import { KPointCoordinates } from "@mat3ra/made/dist/js/lattice/reciprocal/lattice_reciprocal";
import { PropertyName } from "@mat3ra/prode";
type SupportedProperty = {
    name: PropertyName;
    xDataArray?: KPointCoordinates[];
};
export declare function calculatePointsPath(material: Material, property: SupportedProperty): import("@mat3ra/made/dist/js/lattice/reciprocal/lattice_reciprocal").KPointPath | undefined;
export {};
