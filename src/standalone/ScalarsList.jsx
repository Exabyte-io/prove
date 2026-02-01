import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import React from "react";
import s from "underscore.string";

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

function ScalarCard({ result }) {
    const units = result.units ? ` (${result.units})` : "";
    return (
        <Paper variant="outlined" sx={{ p: 2 }}>
            <Typography variant="body2" color="text.secondary">
                {s.humanize(result.name)}
                {units}
            </Typography>
            <Typography variant="h6" color="text.primary">
                {String(result.value)}
            </Typography>
        </Paper>
    );
}

export default function ScalarsList({ results }) {
    const scalarResults = React.useMemo(() => (results || []).filter(isScalarResult), [results]);
    if (!scalarResults.length) return null;

    return (
        <Grid container spacing={2} sx={{ mb: 2 }}>
            {scalarResults.map((result) => {
                const key = s.slugify(result.name);
                return (
                    <Grid item key={key} xs={12} sm={6} md={3}>
                        <ScalarCard result={result} />
                    </Grid>
                );
            })}
        </Grid>
    );
}

