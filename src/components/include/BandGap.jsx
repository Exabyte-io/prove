import { Utils } from "@mat3ra/utils";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import PropTypes from "prop-types";
import React from "react";
import s from "underscore.string";

const { numberFormat, numberPadArray } = Utils.str;

function Item({ title, value }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: isMobile ? "" : "space-between",
            }}
        >
            <Typography
                variant="body2"
                color="text.primary"
                sx={{ width: isMobile ? "50%" : "initial" }}
            >
                {title}
            </Typography>
            <Typography
                variant="body2"
                color="text.primary"
                sx={{ width: isMobile ? "50%" : "initial" }}
            >
                {value}
            </Typography>
        </Box>
    );
}

Item.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};

// TODO: refactor to use generic data type class instead
// eslint-disable-next-line react/prefer-stateless-function
export class BandGap extends React.Component {
    render() {
        const { data: gap, showSpin } = this.props;

        return (
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Item
                        title={`${s.capitalize(gap.type)} gap (${gap.units}):`}
                        value={numberFormat(gap.value, 3)}
                    />
                </Grid>
                {showSpin ? (
                    <Grid item xs={12}>
                        <Item title="Spin:" value={numberFormat(gap.spin, 1)} />
                    </Grid>
                ) : null}
                {gap.kpointValence ? (
                    <Grid item xs={12}>
                        <Item title="Valence Kpoint:" value={numberPadArray(gap.kpointValence)} />
                    </Grid>
                ) : null}
                {gap.kpointConduction ? (
                    <Grid item xs={12}>
                        <Item
                            title="Conduction Kpoint:"
                            value={numberPadArray(gap.kpointConduction)}
                        />
                    </Grid>
                ) : null}
                {gap.eigenvalueValence ? (
                    <Grid item xs={12}>
                        <Item
                            title={`Highest Eigenvalue of Valence Band (${gap.units}):`}
                            value={numberPadArray(gap.kpointConduction)}
                        />
                    </Grid>
                ) : null}
                {gap.eigenvalueConduction ? (
                    <Grid item xs={12}>
                        <Item
                            title={`Lowest Eigenvalue of Conduction Band (${gap.units}):`}
                            value={numberFormat(gap.eigenvalueConduction, 3)}
                        />
                    </Grid>
                ) : null}
            </Grid>
        );
    }
}

BandGap.propTypes = {
    data: PropTypes.object,
    showSpin: PropTypes.bool,
};

BandGap.defaultProps = {
    data: {},
    showSpin: false,
};
