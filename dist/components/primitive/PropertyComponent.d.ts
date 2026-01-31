export class PropertyComponent extends React.Component<any, any, any> {
    constructor(props: any);
    render(): null;
}
export namespace PropertyComponent {
    namespace propTypes {
        const property: PropTypes.Requireable<object>;
        const data: PropTypes.Requireable<object>;
        const title: PropTypes.Requireable<string>;
        const context: PropTypes.Requireable<object>;
    }
    namespace defaultProps {
        const property_1: {};
        export { property_1 as property };
        const data_1: {};
        export { data_1 as data };
        const title_1: string;
        export { title_1 as title };
        const context_1: {};
        export { context_1 as context };
    }
}
import React from "react";
import PropTypes from "prop-types";
