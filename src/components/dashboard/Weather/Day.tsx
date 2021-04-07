import { Forecast } from "models/weather"

interface Props {
  data: Forecast
}

const Day = ( {data}: Props) => {

  return (
    <div className="col-sm-4 text-center pr-2">
    <div className="box h-100 pb-2">
      <div className="weather_icon weather_full_sun"/>
      { data.main.temp.toFixed(1)}°
    </div>
  </div>

  )
}

export default Day