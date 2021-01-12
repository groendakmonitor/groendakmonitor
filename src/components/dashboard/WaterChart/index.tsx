import { useEffect, useState } from "react";
import classNames from "classnames";

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
        <div className="tools">
          <div className="dropdown"><span data-toggle="dropdown" className="icon mdi mdi-more-vert visible-xs-inline-block dropdown-toggle" />
            <ul role="menu" className="dropdown-menu">
              <li><a href="#">Week</a></li>
              <li><a href="#">Month</a></li>
              <li><a href="#">Year</a></li>
              <li className="divider" />
              <li><a href="#">Today</a></li>
            </ul>
          </div><span className="icon mdi mdi-chevron-down" /><span className="icon toggle-loading mdi mdi-refresh-sync" /><span className="icon mdi mdi-close" />
        </div>
        <div className="button-toolbar hidden-xs">
          <div className="btn-group">
            <button type="button" className="btn btn-default">Week</button>
            <button type="button" className="btn btn-default active">Month</button>
            <button type="button" className="btn btn-default">Year</button>
          </div>
          <div className="btn-group">
            <button type="button" className="btn btn-default">Today</button>
          </div>
        </div><span className="title">Recent Movement</span>
      </div>
      <div className="widget-chart-container">
        <div className="widget-chart-info">
          <ul className="chart-legend-horizontal">
            <li><span data-color="main-chart-color1" /> Purchases</li>
            <li><span data-color="main-chart-color2" /> Plans</li>
            <li><span data-color="main-chart-color3" /> Services</li>
          </ul>
        </div>
        <div className="widget-counter-group widget-counter-group-right">
          <div className="counter counter-big">
            <div className="value">25%</div>
            <div className="desc">Purchase</div>
          </div>
          <div className="counter counter-big">
            <div className="value">5%</div>
            <div className="desc">Plans</div>
          </div>
          <div className="counter counter-big">
            <div className="value">5%</div>
            <div className="desc">Services</div>
          </div>
        </div>
        <div id="main-chart" style={{height: '260px'}} />
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