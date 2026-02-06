declare module "@mat3ra/wode" {
    import type { WorkflowSchema } from "@mat3ra/esse/dist/js/types";

    export class Workflow {
        constructor(data: WorkflowSchema);

        name: string;

        usedApplicationNames: string;
    }
}
