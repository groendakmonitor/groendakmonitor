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
        <div className="col-3">
          <div className="temperature font-weight-bold">
            {data.main.temp.toFixed(1)}°
          </div>
        </div>
        <div className="col-3 details">
          <div>Neers</div>
          <div>Kans</div>
          <div>Temp</div>
        </div>
        <div className="col-3 details text-right">
          <div>{data.main.humidity}%</div>
          <div>{data.main.humidity}%</div>
          <div>{data.main.humidity}%</div>
        </div>
      </div>
    </div>

  )
}

export default Today