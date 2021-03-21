import Widget from "../Widget";
import { ReactComponent as RoofNormal } from 'assets/images/roof-normal.svg';
import { ReactComponent as RoofGreen } from 'assets/images/roof-green.svg';

import WidgetBody from "../Widget/WidgetBody";
import './roofTemperature.scss';

const RoofTemperature = () => {

  return (
    <Widget className="roof-temperature">
      <div className="widget-header">
        <span className="title">Temperatuur</span>
      </div>
      <WidgetBody className="container">
        <div className="row">
          <div className="col-6">
            <RoofNormal className="roof"/>
          </div>
          <div className="col-6">
            <RoofGreen className="roof green" />
          </div>
        </div>
      </WidgetBody>
    </Widget>
  )
}

export default RoofTemperature;