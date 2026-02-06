import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { ReactElement } from "react";

import type { FileMetadata, PropertiesProveExtraConfig } from "../types";
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

export class FileContent extends PropertyComponent<FileContentProps> {
    state: FileContentState = {
        fileName: "",
        fileUrl: "",
        fileContent: "",
    };

    componentDidMount(): void {
        const { getFileContent } = this.props.extraConfig || {};
        if (getFileContent) {
            getFileContent(
                this.props.data,
                (contents: string | object[], fileMetadata: FileMetadata) => {
                    this.setState({
                        fileName: fileMetadata.key.split("/").pop() || "",
                        fileUrl: fileMetadata.signedUrl,
                        fileContent: contents,
                    });
                },
            );
        }
    }

    private isFileType = (filetype: string): boolean => {
        return this.props.data && this.props.data.filetype && this.props.data.filetype === filetype;
    };

    get isImageFile(): boolean {
        return this.isFileType("image");
    }

    get isCSVFile(): boolean {
        return this.isFileType("csv");
    }

    get isTextFile(): boolean {
        return this.isFileType("text");
    }

    render(): ReactElement {
        const { DataGridComponent } = this.props.extraConfig || {};

        return (
            <Box className="FileContent" p={4}>
                <Typography variant="subtitle2" color="text.primary" className="FileContent-name">
                    {this.state.fileName}
                </Typography>
                <Box mt={1} className="file-content-container">
                    {this.isImageFile && (
                        <img style={{ maxWidth: "100%" }} src={this.state.fileUrl} alt="" />
                    )}
                    {this.isTextFile && (
                        <pre className="file-preview">{this.state.fileContent}</pre>
                    )}
                    {this.isCSVFile &&
                        (Array.isArray(this.state.fileContent) && DataGridComponent ? (
                            <DataGridComponent data={this.state.fileContent} />
                        ) : (
                            <pre className="file-preview">{this.state.fileContent}</pre>
                        ))}
                </Box>
            </Box>
        );
    }
}
