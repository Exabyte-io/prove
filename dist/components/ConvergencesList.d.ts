export class ConvergencesList extends React.Component<any, any, any> {
    constructor(props: any);
    constructor(props: any, context: any);
    render(): React.JSX.Element;
}
export namespace ConvergencesList {
    namespace propTypes {
        const idPrefix: PropTypes.Validator<string>;
        const monitors: PropTypes.Requireable<any[]>;
        const idGenerator: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
import React from "react";
import PropTypes from "prop-types";
