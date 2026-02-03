import React from "react";
import ReactDOM from "react-dom";

import { ScalarsList } from "./components/ScalarsList";

// eslint-disable-next-line  react/no-render-return-value
const renderResults = (results: any[], newDomElement?: HTMLElement) => {
    const domElement = newDomElement || document.getElementById("root");
    if (!domElement) {
        console.warn("No root element found for rendering results");
        return;
    }

    ReactDOM.render(<ScalarsList results={results} />, domElement);
};

window.renderResults = renderResults;
export { renderResults };
