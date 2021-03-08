import React, { useEffect, useState } from "react";
import LineChart from "./LineChart";
import Widget from "../Widget";

const WaterChart = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const stopLoading = () => setLoading(false);
    const timeout = setTimeout(stopLoading, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Widget loading={loading}>
      <div className="widget-header">
        <span className="title">Waterbalans</span>
      </div>
      <div className="widget-body widget-chart-container">
        <div id="main-chart">
          <LineChart />
        </div>
      </div>
    </Widget>
  )
}

export default WaterChart;