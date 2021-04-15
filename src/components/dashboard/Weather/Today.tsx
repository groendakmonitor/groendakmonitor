import { Forecast } from "models/weather"
import { iconToClassName } from "./utils"

interface Props {
  data: Forecast
}

const Today = ( {data}: Props) => {

  return (
    <div className="box p-3">
      <div className="row">
        <div className="col-3 p-0">
          <div className={`weather_icon ${iconToClassName(data.weather?.[0].icon)}`}/>
        </div>
        <div className="col-3 d-flex align-items-center">
          <div className="temperature font-weight-bold">
            {data.main.temp.toFixed(1)}°
          </div>
        </div>
        <div className="col-3 details">
          <div>Neers</div>
          <div>Wind</div>
          <div>Min/Max</div>
        </div>
        <div className="col-3 details text-right">
          <div>{data.pop}%</div>
          <div>{data.wind.speed}</div>
          <div>{data.main.temp_min.toFixed(1)}/{data.main.temp_max.toFixed(1)}</div>
        </div>
      </div>
    </div>

  )
}

export default Today