/* eslint-disable react/require-default-props */
/* eslint-disable react/no-array-index-key */
import type {
    AtomicForcesProperty,
    MagneticMomentsProperty,
    StressTensorProperty,
} from "@mat3ra/prode";
import { Utils } from "@mat3ra/utils";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import React from "react";

const { numberPadArray } = Utils.str;

type TensorProperty = StressTensorProperty | MagneticMomentsProperty | AtomicForcesProperty;

type TensorProps = {
    property: TensorProperty;
    title: string;
};

export function Tensor({ property, title }: TensorProps) {
    const values = "value" in property ? property.value : property.values.map((val) => val.value);

    return (
        <Box p={4}>
            <Typography variant="subtitle2" color="text.primary">
                {title} ({property.units})
            </Typography>
            <List sx={{ whiteSpace: "pre" }}>
                {values.map((val, index) => {
                    return (
                        <ListItem
                            disablePadding
                            key={index}
                            sx={{ lineHeight: 0, justifyContent: "flex-end" }}
                        >
                            <Typography variant="body2" color="text.primary">
                                {numberPadArray(val)}
                            </Typography>
                        </ListItem>
                    );
                })}
            </List>
        </Box>
    );
}
