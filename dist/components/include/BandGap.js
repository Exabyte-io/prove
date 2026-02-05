import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Utils } from "@mat3ra/utils";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import s from "underscore.string";
function Item({ title, value }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (_jsxs(Box, { sx: {
            display: "flex",
            alignItems: "center",
            justifyContent: isMobile ? "" : "space-between",
        }, children: [_jsx(Typography, { variant: "body2", color: "text.primary", sx: { width: isMobile ? "50%" : "initial" }, children: title }), _jsx(Typography, { variant: "body2", color: "text.primary", sx: { width: isMobile ? "50%" : "initial" }, children: value })] }));
}
export function BandGap({ data: gap, showSpin = false }) {
    return (_jsxs(Grid, { container: true, spacing: 2, children: [_jsx(Grid, { item: true, xs: 12, children: _jsx(Item, { title: `${s.capitalize(gap.type)} gap (${gap.units}):`, value: Utils.str.numberFormat(gap.value, 3) }) }), showSpin ? (_jsx(Grid, { item: true, xs: 12, children: _jsx(Item, { title: "Spin:", value: Utils.str.numberFormat(gap.spin || 0, 1) }) })) : null, gap.kpointValence ? (_jsx(Grid, { item: true, xs: 12, children: _jsx(Item, { title: "Valence Kpoint:", value: Utils.str.numberPadArray(gap.kpointValence) }) })) : null, gap.kpointConduction ? (_jsx(Grid, { item: true, xs: 12, children: _jsx(Item, { title: "Conduction Kpoint:", value: Utils.str.numberPadArray(gap.kpointConduction) }) })) : null, gap.eigenvalueValence ? (_jsx(Grid, { item: true, xs: 12, children: _jsx(Item, { title: `Highest Eigenvalue of Valence Band (${gap.units}):`, value: Utils.str.numberFormat(gap.eigenvalueValence, 3) }) })) : null, gap.eigenvalueConduction ? (_jsx(Grid, { item: true, xs: 12, children: _jsx(Item, { title: `Lowest Eigenvalue of Conduction Band (${gap.units}):`, value: Utils.str.numberFormat(gap.eigenvalueConduction, 3) }) })) : null] }));
}
