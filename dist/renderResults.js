import { jsx as _jsx } from "react/jsx-runtime";
import ReactDOM from "react-dom";
import { ScalarsList } from "./components/ScalarsList";
// eslint-disable-next-line  react/no-render-return-value
const renderResults = (results, newDomElement) => {
    const domElement = newDomElement || document.getElementById("root");
    if (!domElement) {
        console.warn("No root element found for rendering results");
        return;
    }
    ReactDOM.render(_jsx(ScalarsList, { results: results }), domElement);
};
window.renderResults = renderResults;
export { renderResults };
