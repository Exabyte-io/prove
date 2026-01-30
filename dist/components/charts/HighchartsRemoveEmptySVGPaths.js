"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HighchartsRemoveEmptySVGPaths;
// See the open issue in highchairs package:
// https://github.com/highcharts/highcharts/issues/14595#issuecomment-730276116
function HighchartsRemoveEmptySVGPaths(Highcharts) {
  Highcharts.wrap(Highcharts.Chart.prototype, "getChartHTML", function removeEmptyPathNode(proceed) {
    proceed.call(this);
    this.container.querySelectorAll("path").forEach(node => {
      const path = node.getAttribute("d");
      if (path === 0 || path === null) {
        node.remove();
      }
    });
    return this.container.innerHTML;
  });
}