import type { PropertyHolderSchema } from "@mat3ra/esse/dist/js/types";
type PropertyData = PropertyHolderSchema["data"];
type ResultsInput = PropertyData | PropertyData[] | PropertyData[][];
declare const renderResults: (results: ResultsInput, newDomElement?: HTMLElement, extraConfig?: object) => void;
export { renderResults };
