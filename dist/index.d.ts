import type { PropertiesProveExtraConfig, PropertyData } from "./types";
type ResultsInput = PropertyData[];
declare const renderResults: (results: ResultsInput, newDomElement?: HTMLElement, extraConfig?: PropertiesProveExtraConfig) => void;
export { renderResults };
