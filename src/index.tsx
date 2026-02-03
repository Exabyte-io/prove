import React from "react";
import ReactDOM from "react-dom";

import { ResultsView } from "./components/ResultsView";

// eslint-disable-next-line  react/no-render-return-value
const renderResults = (results: any[], newDomElement?: HTMLElement) => {
    const domElement = newDomElement || document.getElementById("root");
    if (!domElement) {
        console.warn("No root element found for rendering results");
        return;
    }

    ReactDOM.render(<ResultsView results={results} />, domElement);
};

(window as any).renderResults = renderResults;
export { renderResults };
