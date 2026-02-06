/* eslint-disable react/jsx-props-no-spreading */
import type { PropertyHolderSchema } from "@mat3ra/esse/dist/js/types";
import { PropertyFactory, PropertyName } from "@mat3ra/prode";
import Grid, { type GridProps } from "@mui/material/Grid";
import React from "react";
import s from "underscore.string";

import type { PropertiesProveExtraConfig } from "../types";
import { BandGaps } from "./BandGaps";
import { DielectricTensor } from "./DielectricTensor";
import { FileContent } from "./FileContent";
import { HubbardU } from "./HubbardU";
import { HubbardV } from "./HubbardV";
import { HubbardVNN } from "./HubbardVNN";
import { OneLevelObject } from "./primitive/Object";
import { Tensor } from "./primitive/Tensor";
import { Structure } from "./Structure";
import { TwoDimensionalPlot } from "./TwoDimensionalPlot";
import { WorkflowLink } from "./WorkflowLink";

interface NonScalarsListProps {
    results?: PropertyHolderSchema["data"][];
    extraConfig?: PropertiesProveExtraConfig;
}

type ComponentConfig = {
    component: React.ElementType;
    size?: GridProps;
};

const SMALL = { xs: 12, md: 6, xl: 4 };
const LARGE = { xs: 12 };

const TWO_DIMENSIONAL_PLOT: ComponentConfig = { component: TwoDimensionalPlot, size: LARGE };
const TENSOR: ComponentConfig = { component: Tensor, size: SMALL };

const PROPERTY_VIEWS = {
    [PropertyName.convergence_electronic]: TWO_DIMENSIONAL_PLOT,
    [PropertyName.convergence_ionic]: TWO_DIMENSIONAL_PLOT,
    [PropertyName.phonon_dispersions]: TWO_DIMENSIONAL_PLOT,
    [PropertyName.phonon_dos]: TWO_DIMENSIONAL_PLOT,
    [PropertyName.density_of_states]: TWO_DIMENSIONAL_PLOT,
    [PropertyName.band_structure]: TWO_DIMENSIONAL_PLOT,
    [PropertyName.reaction_energy_profile]: TWO_DIMENSIONAL_PLOT,
    [PropertyName.potential_profile]: TWO_DIMENSIONAL_PLOT,
    [PropertyName.wavefunction_amplitude]: TWO_DIMENSIONAL_PLOT,
    [PropertyName.charge_density_profile]: TWO_DIMENSIONAL_PLOT,
    [PropertyName.average_potential_profile]: TWO_DIMENSIONAL_PLOT,
    [PropertyName.atomic_forces]: TENSOR,
    [PropertyName.atomic_constraints]: TENSOR,
    [PropertyName.stress_tensor]: TENSOR,
    [PropertyName.magnetic_moments]: TENSOR,
    [PropertyName.final_structure]: { component: Structure, size: LARGE },
    [PropertyName.total_energy_contributions]: { component: OneLevelObject, size: LARGE },
    [PropertyName.jupyter_notebook_endpoint]: { component: OneLevelObject, size: LARGE },
    [PropertyName.band_gaps]: { component: BandGaps, size: LARGE },
    [PropertyName.file_content]: { component: FileContent, size: SMALL },
    [PropertyName.dielectric_tensor]: { component: DielectricTensor, size: LARGE },
    [PropertyName.hubbard_u]: { component: HubbardU, size: LARGE },
    [PropertyName.hubbard_v]: { component: HubbardV, size: LARGE },
    [PropertyName.hubbard_v_nn]: { component: HubbardVNN, size: LARGE },
    [PropertyName.workflow_pyml_predict]: { component: WorkflowLink, size: SMALL },
};

type SupportedPropertyName = keyof typeof PROPERTY_VIEWS;

export function NonScalarsList({ results = [], extraConfig }: NonScalarsListProps) {
    const nonScalarResults = React.useMemo(() => {
        const nonScalarResultsNames = PropertyFactory.getScalarPropertyNames();
        return results.filter((x) => {
            return !nonScalarResultsNames.includes(x.name as any) && Object.keys(x).length > 1;
        });
    }, [results]);

    const widgets = React.useMemo(() => {
        const widgetElements: React.ReactElement[] = [];

        nonScalarResults.forEach((data, index) => {
            const property = PropertyFactory.createProperty(data);
            const componentConfig = PROPERTY_VIEWS[data.name as SupportedPropertyName];
            const propertyId = s.slugify(data.name);

            if (componentConfig) {
                const { component: ResultComponent, size } = componentConfig;
                widgetElements.push(
                    // We add the index to propertyID here to ensure a unique key exists for each property
                    // If we run into a bug in the future where we try to update the results dynamically, but they don't
                    // actually update, see https://stackoverflow.com/q/41703160/

                    <Grid item data-tid={propertyId} key={propertyId + index.toString()} {...size}>
                        <ResultComponent
                            property={property}
                            data={data}
                            key={propertyId}
                            title={s.humanize(data.name)}
                            extraConfig={extraConfig}
                        />
                    </Grid>,
                );
            }
        });

        return widgetElements;
    }, [nonScalarResults, extraConfig]);

    if (!widgets.length) return null;

    return (
        <Grid container wrap="wrap">
            {widgets}
        </Grid>
    );
}
