import React from "react";
import ReactDOM from "react-dom";

import ResultsViewer from "./ResultsViewer";

export function renderResults(target, results, options = {}) {
    const element = typeof target === "string" ? document.querySelector(target) : target;
    if (!element) throw new Error("renderResults: target element not found");
    ReactDOM.render(<ResultsViewer results={results} title={options.title} />, element);
}

export function unmountResults(target) {
    const element = typeof target === "string" ? document.querySelector(target) : target;
    if (!element) return;
    ReactDOM.unmountComponentAtNode(element);
}

// Wave-style entrypoint: callable from an iframe / notebook after dynamic import.
export function renderProveResults(results, target, options = {}) {
    renderResults(target || document.getElementById("root") || "body", results, options);
}

if (typeof window !== "undefined") {
    window.renderProveResults = renderProveResults;
    window.unmountProveResults = (target) => {
        if (!target) return;
        unmountResults(target);
    };
}

