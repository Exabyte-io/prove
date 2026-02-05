import { jsx as _jsx } from "react/jsx-runtime";
import { getUUID } from "@mat3ra/code/dist/js/utils";
import { ReactHighchartsResizable } from "../charts/ReactHighchartsResizable";
export function Chart({ config = {}, title = "", idGenerator = getUUID }) {
    return (_jsx(ReactHighchartsResizable, { config: config, domProps: {
            id: `${title || "chart"}-${idGenerator()}`,
        } }));
}
