/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
import { styled } from "@mui/material/styles";
import Highcharts from "highcharts";
import HighchartsExportData from "highcharts/modules/export-data";
import HighchartsExporting from "highcharts/modules/exporting";
import NoDataToDisplay from "highcharts/modules/no-data-to-display";
import HighchartsOfflineExporting from "highcharts/modules/offline-exporting";
import HighchartsMore from "highcharts-more";
import HighchartsReact from "highcharts-react-official";
import lodash from "lodash";
import React from "react";

import HighchartsRemoveEmptySVGPaths from "./HighchartsRemoveEmptySVGPaths";

// Highcharts more
HighchartsMore(Highcharts);

HighchartsExporting(Highcharts);
HighchartsOfflineExporting(Highcharts);
HighchartsExportData(Highcharts);

HighchartsRemoveEmptySVGPaths(Highcharts);

NoDataToDisplay(Highcharts);

const StyledDiv = styled("div")(({ theme }) => ({
    ".highcharts-data-table": {
        margin: theme.spacing(1),
        overflow: "auto",
    },
}));

export class ReactHighchartsResizable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // eslint-disable-next-line react/no-unused-state
            resized: false,
        };
    }

    render() {
        const newProps = {
            ...this.props,
            domProps: {
                className: "chart-container",
                style: {
                    height: "100%",
                    maxWidth: "100%",
                },
                // eslint-disable-next-line react/destructuring-assignment,react/prop-types
                ...this.props.domProps,
            },
        };

        return (
            <StyledDiv
                className="resizable-container"
                onClick={(e) => {
                    // trigger update to re-render chart
                    // prevent re-render when clicking on exporting buttons
                    const parentClassName = lodash.get(e, "target.parentElement.className.baseVal");
                    const condition =
                        parentClassName !==
                        "highcharts-button highcharts-contextbutton highcharts-button-pressed";
                    // TODO: fix re-rendering issue on zoom in
                    // condition && this.setState({ resized: true });
                }}
            >
                <HighchartsReact
                    resizable={false}
                    highcharts={Highcharts}
                    options={newProps.config}
                    containerProps={newProps.domProps}
                />
            </StyledDiv>
        );
    }
}
