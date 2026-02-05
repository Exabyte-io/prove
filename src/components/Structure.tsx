import React, { useState } from "react";

import type { PropertiesProveExtraConfig } from "../types";

interface StructureNewProps {
    extraConfig: PropertiesProveExtraConfig;
}

export function Structure({ extraConfig }: StructureNewProps) {
    const [index, setIndex] = useState(0);
    const { MaterialComponent, MaterialComponentProps, materials } = extraConfig;

    if (!materials.length) return null;

    return (
        <MaterialComponent
            className="relaxed-structure m-b-10"
            editable={false}
            showHeader
            showActions
            showHeaderToolbar
            hideDescription
            material={materials[index]}
            index={index}
            length={materials.length}
            onUpdateIndex={setIndex}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...MaterialComponentProps}
        />
    );
}
