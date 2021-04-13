import React, { useEffect, useMemo } from "react";
import { useCustomerStore } from "store/customer";
import { useWeatherStore } from "store/weather";
import Widget, { WidgetBody, WidgetHeader } from "../Widget";
import Updates from "./Updates";
import './styles/weather.scss';
import Today from "./Today";
import Day from "./Day";
import { Forecast } from "models/weather";

const ONE_HOUR = 3600000;

const Weather = () => {
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

  // Find the forecast for noon of tomorrow and the day after that and the day after that
  const days = useMemo(() => {
    const result: Forecast[] = []
    const today = new Date().toISOString().substring(0, 'XXXX-XX-XX'.length);
    const NUM_DAYS = 3;

    data?.list.every((forecast) => {
      if (forecast.dt_txt.substring(0, 'XXXX-XX-XX'.length) === today) return true
      if (forecast.dt_txt.endsWith("12:00:00")) {
        result.push(forecast)
      }
      return result.length < NUM_DAYS // keep searching until we found both
    })

    return result
  }, [data?.list])

  if (!data) return null;
  
  const formattedDate = new Date().toLocaleDateString();

  // const tomorrowNoon = data.list.find(foreCast)
  return (
    <Widget className="weather">
      <WidgetHeader>
        <div className="title">
          { data?.city.name } 
        </div>
      </WidgetHeader>
      <WidgetBody className="container">
        <Today data={data.list[0] }/>
        <div className="row mt-3 no-gutters">
          <Day data={days[0]} />
          <Day data={days[1]} />
          <Day data={days[2]} />
        </div>
        <div className="row mt-3 ">
          <div className="news-title  d-flex justify-content-between w-100">
            <div className="py-2 px-3 font-weight-bold">
              Updates
            </div>    
            <div className="subtitle pt-2 pr-2 d-none d-sm-block d-md-none d-lg-block ">
              {formattedDate}
            </div>  
          </div>
          <Updates />
        </div>
      </WidgetBody>
    </Widget>
  )
}

export default Weather;
