export interface BandGapData {
    kpointConduction?: [number, number, number];
    kpointValence?: [number, number, number];
    eigenvalueConduction?: number;
    eigenvalueValence?: number;
    spin?: number;
    type: "direct" | "indirect";
    units: string;
    value: number;
}
interface BandGapProps {
    data: BandGapData;
    showSpin?: boolean;
}
export declare function BandGap({ data: gap, showSpin }: BandGapProps): import("react/jsx-runtime").JSX.Element;
export {};
