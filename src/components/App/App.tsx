import React, { useState } from 'react';
import WaterChart from '../dashboard/WaterChart';
import Weather from '../dashboard/Weather';
import WaterSaved from '../dashboard/WaterSaved';
import Saturation from '../dashboard/Saturation';
import Admin from 'components/admin/Admin';
import useKey from "@rooks/use-key";
import './styles/app.scss';

const App = () => {
  const [admin, setAdmin] = useState(false)

  useKey(["~"], (a) => {
    setAdmin(a => !a)
  })

  return (
    <div className="app d-flex pb-4 align-items-center">
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
        <div className="row">
          <div className="col-md-8">
            <WaterChart />
          </div>
          <div className="col-md-4">
            <Weather />
          </div>
        </div>
      </div>
      { admin && <Admin onClose={() => setAdmin(false)} /> }
    </div>
  );
}

export default App;
