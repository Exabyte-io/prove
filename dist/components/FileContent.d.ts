import { ReactElement } from "react";
import type { PropertiesProveExtraConfig } from "../types";
import { PropertyComponent } from "./primitive/PropertyComponent";
interface FileContentProps {
    data?: any;
    extraConfig?: PropertiesProveExtraConfig;
}
interface FileContentState {
    fileName: string;
    fileUrl: string;
    fileContent: string | any[];
}
export declare class FileContent extends PropertyComponent<FileContentProps> {
    state: FileContentState;
    componentDidMount(): void;
    private isFileType;
    get isImageFile(): boolean;
    get isCSVFile(): boolean;
    get isTextFile(): boolean;
    render(): ReactElement;
}
export {};
