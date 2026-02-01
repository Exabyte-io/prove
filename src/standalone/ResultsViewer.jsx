import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import React from "react";

import { BandGaps } from "../components/BandGaps";
import ScalarsList from "./ScalarsList";

function isNonEmptyObject(value) {
    return Boolean(value && typeof value === "object" && Object.keys(value).length > 0);
}

function isScalarResult(result) {
    if (!isNonEmptyObject(result)) return false;
    if (!("name" in result)) return false;
    if (result.value === undefined) return false;
    if (typeof result.value === "object") return false;
    return true;
}

const NON_SCALAR_RENDERERS = {
    band_gaps: (result) => <BandGaps property={result} />,
};

export default function ResultsViewer({ results, title }) {
    const nonScalarResults = React.useMemo(() => {
        return (results || []).filter((x) => isNonEmptyObject(x) && x.name && !isScalarResult(x));
    }, [results]);

    const supportedNonScalars = React.useMemo(() => {
        return nonScalarResults.filter((x) => Boolean(NON_SCALAR_RENDERERS[x.name]));
    }, [nonScalarResults]);

    return (
        <Box sx={{ fontFamily: "Roboto, Arial, sans-serif" }}>
            {title ? (
                <Box sx={{ mb: 2 }}>
                    <Typography variant="h6">{title}</Typography>
                </Box>
            ) : null}

            <ScalarsList results={results} />

            {supportedNonScalars.map((result) => {
                const render = NON_SCALAR_RENDERERS[result.name];
                return (
                    <Box key={result.name} sx={{ mb: 2 }}>
                        <Paper variant="outlined" sx={{ p: 2 }}>
                            {render(result)}
                        </Paper>
                    </Box>
                );
            })}
        </Box>
    );
}
