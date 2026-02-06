import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
export function Structure({ extraConfig }) {
    const [index, setIndex] = useState(0);
    const { MaterialComponent, MaterialComponentProps, materials } = extraConfig;
    if (!materials.length)
        return null;
    return (_jsx(MaterialComponent, { className: "relaxed-structure m-b-10", editable: false, showHeader: true, showActions: true, showHeaderToolbar: true, hideDescription: true, material: materials[index], index: index, length: materials.length, onUpdateIndex: setIndex, ...MaterialComponentProps }));
}
