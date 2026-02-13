import { jsx as _jsx } from "react/jsx-runtime";
import ThemeProvider from "@exabyte-io/cove.js/dist/theme/provider";
import ReactDOM from "react-dom";
import { ResultsView } from "./ResultsView";
const normalizeResults = (results) => {
    // To be able to pass a single result or an array of them
    if (Array.isArray(results) && results.length === 1 && Array.isArray(results[0]))
        return results[0];
    if (Array.isArray(results) && results.length && results.every(Array.isArray))
        return results.flat();
    if (Array.isArray(results))
        return results;
    return [results];
};
// eslint-disable-next-line  react/no-render-return-value
const renderResults = (results, newDomElement, extraConfig) => {
    const domElement = newDomElement || document.getElementById("root");
    if (!domElement) {
        console.warn("No root element found for rendering results");
        return;
    }
    const normalizedResults = normalizeResults(results);
    ReactDOM.render(_jsx(ThemeProvider, { children: _jsx(ResultsView, { results: normalizedResults, extraConfig: extraConfig }) }), domElement);
};
window.renderResults = renderResults;
export { renderResults };
