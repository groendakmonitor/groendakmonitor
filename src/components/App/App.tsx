import React, { useState } from 'react';
import WaterChart from '../dashboard/WaterChart';
import Weather from '../dashboard/Weather';
import WaterSaved from '../dashboard/WaterSaved';
import Saturation from '../dashboard/Saturation';
import Admin from 'components/admin/Admin';
import useKey from "@rooks/use-key";
import RoofTemperature from 'components/dashboard/RoofTemperature';
import Biodiversity from 'components/dashboard/Biodiversity';
import './styles/app.scss';

const App = () => {
  const [admin, setAdmin] = useState(false)

  useKey(["~"], (a) => {
    setAdmin(a => !a)
  })

  return (
    <div className="app d-flex pb-4 align-items-center position-relative">
      <div className="main-content container d-flex flex-column px-4">
        <div className="row">
          <div className="col-xs-12 col-md-6 col-lg-3 mb-4">
            <Saturation />
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3 mb-4">
            <RoofTemperature />
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3 mb-4">
            <Biodiversity />
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3 mb-4">
            <WaterSaved />
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
      <div className="admin-trigger" onClick={() => setAdmin(true)}></div>
    </div>
  );
}

export default App;
