import { jsx as _jsx } from "react/jsx-runtime";
import { ScalarsList } from "./ScalarsList";
export const ResultsView = ({ results = [] }) => {
    return _jsx(ScalarsList, { results: results });
};
