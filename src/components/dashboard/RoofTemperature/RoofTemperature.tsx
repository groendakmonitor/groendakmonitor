import Widget, { WidgetBody, WidgetHeader } from "../Widget";
import { ReactComponent as RoofNormal } from './styles/images/roof-normal.svg';
import { ReactComponent as RoofGreen } from './styles/images/roof-green.svg';

import './styles/roofTemperature.scss';
import { useWeatherStore } from "store/weather";
import { useMemo } from "react";

const RoofTemperature = () => {
  const data = useWeatherStore((data) => data.weatherData);

  const temps = useMemo(() => {
    const normal = data?.list[0].main.temp ?? 0;
    const green = normal * .8; // todo: comes from calculation on backend
    return {
      normal,
      green
    }
  }, [data]);

  return (
    <Widget className="roof-temperature">
      <WidgetHeader>
        <span className="title">Temperatuur</span>
      </WidgetHeader>
      <WidgetBody className="container">
        <div className="row mt-4">
          <div className="col-6">
            <RoofNormal className="roof"/>
            <div className="text-center">
              {temps.normal.toFixed(1)}°
            </div>
          </div>
          <div className="col-6">
            <RoofGreen className="roof green" />
            <div className="text-center">
              {temps.green.toFixed(1)}°
            </div>
          </div>
        </div>
      </WidgetBody>
    </Widget>
  )
}

export default RoofTemperature;
