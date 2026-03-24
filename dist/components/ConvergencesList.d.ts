import { ReactElement } from "react";
import type { PropertyData } from "../types";
interface ConvergencesListProps {
    idPrefix: string;
    monitors?: PropertyData[];
    idGenerator?: () => string;
}
export declare function ConvergencesList({ idPrefix, monitors, idGenerator, }: ConvergencesListProps): ReactElement;
export {};
