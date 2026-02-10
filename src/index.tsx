import ThemeProvider from "@exabyte-io/cove.js/dist/theme/provider";
import React from "react";
import ReactDOM from "react-dom";

import { ResultsView } from "./ResultsView";

// eslint-disable-next-line  react/no-render-return-value
const renderResults = (results: any, newDomElement?: HTMLElement, extraConfig?: any) => {
    const domElement = newDomElement || document.getElementById("root");
    if (!domElement) {
        console.warn("No root element found for rendering results");
        return;
    }

    const normalizedResults = (() => {
        // To be able to pass a single result or an array of them
        if (Array.isArray(results) && results.length === 1 && Array.isArray(results[0]))
            return results[0];
        if (Array.isArray(results) && results.length && results.every(Array.isArray))
            return results.flat();
        if (Array.isArray(results)) return results;
        return [results];
    })();

    ReactDOM.render(
        <ThemeProvider>
            <ResultsView results={normalizedResults} extraConfig={extraConfig} />
        </ThemeProvider>,
        domElement,
    );
};

(window as any).renderResults = renderResults;
export { renderResults };
