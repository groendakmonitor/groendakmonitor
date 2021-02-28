import React from 'react';
import WaterChart from '../dashboard/WaterChart';
import Weather from '../dashboard/Weather';
import WaterSaved from '../dashboard/WaterSaved';
import Saturation from '../dashboard/Saturation';
import './styles/app.scss';

function App() {
  return (
    <div className="app d-flex pb-4">
      <div className="main-content container-fluid d-flex flex-column px-4">
        <div className="row">
          <div className="col-xs-12 col-md-6 col-lg-3">
            <WaterSaved />
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3">
            <div className="widget widget-tile">
              <div id="spark2" className="chart sparkline" />
              <div className="data-info">
                <div className="desc"></div>
                <div className="value"><span className="indicator indicator-positive mdi mdi-chevron-up" /><span data-toggle="counter" data-end={80} data-suffix="%" className="number">0</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3">
            <div className="widget widget-tile">
              <div id="spark3" className="chart sparkline" />
              <div className="data-info">
                <div className="desc">Impressions</div>
                <div className="value"><span className="indicator indicator-positive mdi mdi-chevron-up" /><span data-toggle="counter" data-end={532} className="number">0</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3">
            <Saturation />
          </div>
        </div>
        <div className="row flex-grow-1">
          <div className="col-md-8">
            <WaterChart />
          </div>
          <div className="col-md-4">
            <Weather />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
