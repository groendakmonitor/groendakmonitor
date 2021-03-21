import Widget from "../Widget";
import { ReactComponent as RoofNormal } from 'assets/images/roof-normal.svg';
import { ReactComponent as RoofGreen } from 'assets/images/roof-green.svg';

import './roofTemperature.scss';

const RoofTemperature = () => {

  return (
    <Widget className="roof-temperature">
      <div className="widget-header">
        <span className="title">Temperatuur</span>
      </div>
      <div className="widget-body text-larger container">
        <div className="row">
          <div className="col-6">
            <RoofNormal className="roof"/>
          </div>
          <div className="col-6">
            <RoofGreen className="roof" />
          </div>
        </div>
      </div>
    </Widget>
  )
}

export default RoofTemperature;