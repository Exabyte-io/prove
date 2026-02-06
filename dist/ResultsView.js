import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { NonScalarsList } from "./components/NonScalarsList";
import { ScalarsList } from "./components/ScalarsList";
export const ResultsView = ({ results = [], extraConfig }) => {
    return (_jsxs(_Fragment, { children: [_jsx(ScalarsList, { results: results }), _jsx(NonScalarsList, { results: results, extraConfig: extraConfig })] }));
};
