export class EigenvaluesAtKpoint extends React.Component<any, any, any> {
    constructor(config: any);
    state: {
        isExpanded: boolean;
    };
    renderEigenvaluesAtKpoint(eigenvalues: any): any[];
    renderAllKpoints(): any;
    renderSwitch(): React.JSX.Element;
    render(): React.JSX.Element;
}
export namespace EigenvaluesAtKpoint {
    namespace propTypes {
        const data: PropTypes.Requireable<any[]>;
    }
    namespace defaultProps {
        const data_1: never[];
        export { data_1 as data };
    }
}
import React from "react";
import PropTypes from "prop-types";
