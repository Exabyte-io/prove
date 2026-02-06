import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { BandGap } from "./include/BandGap";
import { EigenvaluesAtKpoint } from "./include/EigenvaluesAtKpoint";
import { PropertyComponent } from "./primitive/PropertyComponent";
export class BandGaps extends PropertyComponent {
    render() {
        const property = this.props.property;
        const { eigenvalues = [], values = [] } = property;
        const spins = new Set(values.map((gap) => gap.spin || 0));
        return (_jsxs(Box, { p: 4, children: [_jsxs(Box, { className: "band-gaps", children: [_jsx(Typography, { variant: "subtitle2", color: "text.primary", children: "Band gap" }), _jsx(Grid, { container: true, spacing: 3, children: values.map((gap, idx) => {
                                return (_jsx(Grid, { item: true, p: 1, xs: 12, lg: 6, children: _jsx(BandGap, { data: gap, showSpin: spins.size > 1 }) }, `${idx}-${gap.value}`));
                            }) })] }), Boolean(eigenvalues && eigenvalues.length) && (_jsx(Box, { p: 2, sx: { overflow: "auto" }, children: _jsx(EigenvaluesAtKpoint, { data: eigenvalues }) }))] }));
    }
}
