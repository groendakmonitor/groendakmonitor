import Widget, { WidgetBody, WidgetHeader } from "../Widget";
import { ReactComponent as RoofNormal } from './styles/images/roof-normal.svg';
import { ReactComponent as RoofGreen } from './styles/images/roof-green.svg';

import './styles/roofTemperature.scss';
import { useWeatherStore } from "store/weather";

const RoofTemperature = () => {
  const data = useWeatherStore((data) => data.weatherData);

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