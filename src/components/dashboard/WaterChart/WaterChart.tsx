import React, { useEffect, useState } from "react";
import LineChart from "./LineChart";
import Widget, { WidgetBody, WidgetHeader } from "../Widget";

const WaterChart = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const stopLoading = () => setLoading(false);
    const timeout = setTimeout(stopLoading, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Widget loading={loading} className="d-flex flex-column">
      <WidgetHeader>
        <span className="title">Waterbalans</span>
      </WidgetHeader>
      <WidgetBody className="flex-1 mt-auto">
        <div id="main-chart">
          <LineChart />
        </div>
      </WidgetBody>
    </Widget>
  )
}

export default WaterChart;