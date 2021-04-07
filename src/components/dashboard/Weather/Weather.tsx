import React, { useEffect } from "react";
import { useCustomerStore } from "store/water";
import { useWeatherStore } from "store/weather";
import Widget, { WidgetBody, WidgetHeader } from "../Widget";
import Updates from "./Updates";
import './styles/weather.scss';
import Today from "./Today";
import Day from "./Day";

const ONE_HOUR = 3600000;

const Weather = () => {
  // const [loading, setLoading] = useState(true);
  // const [data, setData] = useState<WeatherResponse>();

  const customerId = useCustomerStore((data) => data.customerId);
  const customerData = useCustomerStore((data) => data.customerData);
  const fetchCustomerData = useCustomerStore((data) => data.fetchCustomerData);

  const data = useWeatherStore((data) => data.weatherData);
  const fetchWeatherData = useWeatherStore((data) => data.fetchWeatherData);

  useEffect(() => {
    if (customerId && !customerData) {
      fetchCustomerData(customerId)
    }
  }, [customerData, customerId, fetchCustomerData])

  useEffect(() => {
    if (!customerData) return;
    const [lat, lon] = customerData.location.split(',')
    const fetchWeather = () => {
      fetchWeatherData(parseFloat(lat), parseFloat(lon))
    }
    fetchWeather();
    setInterval(fetchWeather, ONE_HOUR)

  }, [customerData, fetchWeatherData]);
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
  
  const formattedDate = new Date().toLocaleDateString();
  
  return (
    <Widget className="weather">
      <WidgetHeader className=" d-flex justify-content-between">
        <div className="title">
          { data?.city.name } 
        </div>
        <div className="subtitle d-none d-sm-block d-md-none d-lg-block ">
          {formattedDate}
        </div>
      </WidgetHeader>
      <WidgetBody className="container">
        <Today data={data.list[0] }/>
        <div className="row mt-3 no-gutters">
          <Day data={data.list[1]} />
          <Day data={data.list[2]} />
          <Day data={data.list[3]} />
        </div>
        <div className="row mt-3 ">
          <div className="news-title py-2 px-3 w-100">
            Updates
          </div>      
          <Updates />
        </div>
      </WidgetBody>
    </Widget>
  )
}

export default Weather;
