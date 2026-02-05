import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { PropertyComponent } from "./primitive/PropertyComponent";
export class FileContent extends PropertyComponent {
    constructor() {
        super(...arguments);
        this.state = {
            fileName: "",
            fileUrl: "",
            fileContent: "",
        };
        this.isFileType = (filetype) => {
            return this.props.data && this.props.data.filetype && this.props.data.filetype === filetype;
        };
    }
    componentDidMount() {
        const { getFileContent } = this.props.extraConfig || {};
        if (getFileContent) {
            getFileContent(this.props.data, (contents, fileMetadata) => {
                this.setState({
                    fileName: fileMetadata.key.split("/").pop() || "",
                    fileUrl: fileMetadata.signedUrl,
                    fileContent: contents,
                });
            });
        }
    }
    get isImageFile() {
        return this.isFileType("image");
    }
    get isCSVFile() {
        return this.isFileType("csv");
    }
    get isTextFile() {
        return this.isFileType("text");
    }
    render() {
        const { DataGridComponent } = this.props.extraConfig || {};
        return (_jsxs(Box, { className: "FileContent", p: 4, children: [_jsx(Typography, { variant: "subtitle2", color: "text.primary", className: "FileContent-name", children: this.state.fileName }), _jsxs(Box, { mt: 1, className: "file-content-container", children: [this.isImageFile && (_jsx("img", { style: { maxWidth: "100%" }, src: this.state.fileUrl, alt: "" })), this.isTextFile && (_jsx("pre", { className: "file-preview", children: this.state.fileContent })), this.isCSVFile &&
                            (Array.isArray(this.state.fileContent) && DataGridComponent ? (_jsx(DataGridComponent, { data: this.state.fileContent })) : (_jsx("pre", { className: "file-preview", children: this.state.fileContent })))] })] }));
    }
}
