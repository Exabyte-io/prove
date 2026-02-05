import type { PropertyHolderSchema } from "@mat3ra/esse/dist/js/types";
import { ReactElement } from "react";
interface ConvergencesListProps {
    idPrefix: string;
    monitors?: PropertyHolderSchema["data"][];
    idGenerator?: () => string;
}
export declare function ConvergencesList({ idPrefix, monitors, idGenerator, }: ConvergencesListProps): ReactElement;
export {};
