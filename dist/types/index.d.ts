import type { MaterialSchema } from "@mat3ra/esse/dist/js/types";
import type React from "react";
export type FileMetadata = {
    key: string;
    signedUrl: string;
};
export type OnFileContentsLoad = (contents: string | object[], fileMetadata: FileMetadata) => void;
export interface PropertiesProveExtraConfig {
    materials: MaterialSchema[];
    MaterialComponent: React.ComponentType<any>;
    MaterialComponentProps: Record<string, unknown>;
    DataGridComponent: React.ComponentType<any>;
    getFileContent: (data: any, onSuccess: OnFileContentsLoad) => void;
}
