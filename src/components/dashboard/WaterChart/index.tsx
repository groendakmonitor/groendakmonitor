import React, { useEffect, useState } from "react";
import classNames from "classnames";
import LineChart from "./LineChart";

const WaterChart = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const stopLoading = () => setLoading(false);
    const timeout = setTimeout(stopLoading, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`widget widget-tile be-loading ${classNames({"be-loading-active": loading})}`}>
      <div className="widget-head">
        <span className="title">Waterbalans</span>
      </div>
      <div className="widget-chart-container">
        <div id="main-chart">
          <LineChart />
        </div>
      </div>
      <div className="be-spinner">
        <svg width="40px" height="40px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
          <circle fill="none" strokeWidth={4} strokeLinecap="round" cx={33} cy={33} r={30} className="circle" />
        </svg>
      </div>
    </div>
  )
}

export default WaterChart;