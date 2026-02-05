import ThemeProvider from "@exabyte-io/cove.js/dist/theme/provider";
import LightMaterialUITheme, { DarkMaterialUITheme } from "@exabyte-io/cove.js/dist/theme/theme";
import React from "react";
import ReactDOM from "react-dom";

import { ResultsView } from "./ResultsView";
import type { PropertiesProveExtraConfig } from "./types";

interface RenderOptions {
    theme?: "light" | "dark";
}

// eslint-disable-next-line  react/no-render-return-value
const renderResults = (
    results: any[],
    newDomElement?: HTMLElement,
    extraConfig?: PropertiesProveExtraConfig,
    options?: RenderOptions,
) => {
    const domElement = newDomElement || document.getElementById("root");
    if (!domElement) {
        console.warn("No root element found for rendering results");
        return;
    }

    const theme = options?.theme === "dark" ? DarkMaterialUITheme : LightMaterialUITheme;

    // Apply theme background and text colors to the container
    domElement.style.backgroundColor = theme.palette.background.default;
    domElement.style.color = theme.palette.text.primary;

    ReactDOM.render(
        <ThemeProvider theme={theme}>
            <ResultsView results={results} extraConfig={extraConfig} />
        </ThemeProvider>,
        domElement,
    );
};

(window as any).renderResults = renderResults;
export { renderResults };
