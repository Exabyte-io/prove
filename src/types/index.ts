import type { PropertyHolderSchema } from "@mat3ra/esse/dist/js/types";
import type { Material } from "@mat3ra/made";
import type React from "react";

export type PropertyData = PropertyHolderSchema["data"];

export type FileMetadata = { key: string; signedUrl: string };
export type OnFileContentsLoad = (contents: string | object[], fileMetadata: FileMetadata) => void;

export interface PropertiesProveExtraConfig {
    material: Material;
    materials: Material[];
    MaterialComponent: React.ComponentType<any>;
    MaterialComponentProps: Record<string, unknown>;
    DataGridComponent: React.ComponentType<any>;
    getFileContent: (data: any, onSuccess: OnFileContentsLoad) => void;
}
