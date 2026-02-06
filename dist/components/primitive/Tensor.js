import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Utils } from "@mat3ra/utils";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
const { numberPadArray } = Utils.str;
export function Tensor({ property, title }) {
    const values = "value" in property ? property.value : property.values.map((val) => val.value);
    return (_jsxs(Box, { p: 4, children: [_jsxs(Typography, { variant: "subtitle2", color: "text.primary", children: [title, " (", property.units, ")"] }), _jsx(List, { sx: { whiteSpace: "pre" }, children: values.map((val, index) => {
                    return (_jsx(ListItem, { disablePadding: true, sx: { lineHeight: 0, justifyContent: "flex-end" }, children: _jsx(Typography, { variant: "body2", color: "text.primary", children: numberPadArray(val) }) }, index));
                }) })] }));
}
