import type { WorkflowSchema } from "@mat3ra/esse/dist/js/types";
interface WorkflowLinkProps {
    data: WorkflowSchema;
    extraConfig: {
        workflowUrl: string;
    };
}
export declare function WorkflowLink({ data, extraConfig }: WorkflowLinkProps): import("react/jsx-runtime").JSX.Element;
export {};
