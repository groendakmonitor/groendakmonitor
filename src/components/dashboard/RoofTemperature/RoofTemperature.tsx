import Widget, { WidgetBody, WidgetHeader } from "../Widget";
import { ReactComponent as RoofNormal } from 'assets/images/roof-normal.svg';
import { ReactComponent as RoofGreen } from 'assets/images/roof-green.svg';

import './roofTemperature.scss';

const RoofTemperature = () => {

  return (
    <Widget className="roof-temperature">
      <WidgetHeader>
        <span className="title">Temperatuur</span>
      </WidgetHeader>
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