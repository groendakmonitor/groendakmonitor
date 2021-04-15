import { Forecast } from "models/weather"
import { iconToClassName } from "./utils"

interface Props {
  data: Forecast
}

const DAY_NAMES = [
  "zo",
  "ma",
  "di",
  "wo",
  "do",
  "vr",
  "za",
]

const Day = ( {data}: Props) => {
  const dayName = DAY_NAMES[new Date(data.dt * 1000).getDay()]
  return (
    <div className="col-4 text-center">
    <div className="box h-100 pb-2">
      <div className="pt-2">{dayName}</div>
      <div className={`weather_icon ${iconToClassName(data.weather[0]?.icon)}`}/>
      { data.main.temp.toFixed(1)}°
    </div>
  </div>

  )
}

export default Day