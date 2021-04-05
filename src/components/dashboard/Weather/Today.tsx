import { Forecast } from "models/weather"

interface Props {
  data: Forecast
}

const Today = ( {data}: Props) => {

  return (
    <div className="box p-3">
      <div className="row">
        <div className="col-3 p-0">
          {/* todo */}
          <div className="weather_icon weather_few_clouds"/>
        </div>
        <div className="col-3">
          <div className="temperature font-weight-bold">
            {data.main.temp.toFixed(1)}°
          </div>
        </div>
        <div className="col-3 details">
          <div>Neerslag</div>
          <div>Kans</div>
          <div>Temperatuur</div>
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