import { useEffect, useState } from "react";
import { WeatherResponse } from "../../../typing/weather";
import './styles/weather.scss';

const Weather = () => {
  // const [loading, setLoading] = useState(true);
  const [data, setData] = useState<WeatherResponse>();
  useEffect(() => {
    // const stopLoading = () => setLoading(false);
    // const timeout = setTimeout(stopLoading, 1000);
    // return () => clearTimeout(timeout);
    fetch(`${process.env.PUBLIC_URL}/api/weather-current.json`)
      .then((res) => res.json())
      .then(json => {
        setData(json)
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }, []);
  // 01d.png weather_icon_full_sun.svg
  // 01n.png weather_icon_night.svg
  // 02d.png weather_icon_few_clouds.svg
  // 03d.png weather_icon_full_clouds.svg
  // 04d.png weather_icon_cloud_slight_rain.svg
  // 09d.png weather_icon_rainy.svg
  // 10d.png weather_icon_sun_rain_clouds.svg
  // 11d.png weather_icon_thunder.svg
  // 13d.png weather_icon_snow.svg
  // 50d.png 
  if (!data) return null;
  
  return (
    <div className={`widget widget-tile be-loading`}>
      <div className="widget-head">
        <div className="title">
          { data?.name } 
        </div>
      </div>
      <div className="widget-container container-fluid">
        <div className="row">
          <div className="col-sm-4 text-center">
            <div className="weather_icon weather_few_clouds"/>
            <div className="weather-today">
             ({data.weather[0].description})
            </div>
          </div>
          <div className="col-sm-4 d-flex flex-column justify-content-center">
            <div className="temperature">
              {data.main.temp.toFixed(1)}°
            </div>
          </div>
          <div className="col-sm-4">
            hum: {data.main.humidity}%
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3 text-center">
            <div className="weather_icon weather_full_sun"/>
            {addDay(1).toLocaleDateString()}
          </div>
          <div className="col-sm-3 text-center">
            <div className="weather_icon weather_sun_rain_clouds"/>
            {addDay(2).toLocaleDateString()}
          </div>
          <div className="col-sm-3 text-center">
            <div className="weather_icon weather_thunder"/>
            {addDay(3).toLocaleDateString()}
          </div>
          <div className="col-sm-3 text-center">
            <div className="weather_icon weather_snow"/>
            {addDay(4).toLocaleDateString()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather;

const addDay = (days: number) => {
  return new Date(new Date().getTime() + days * 86400000);
}