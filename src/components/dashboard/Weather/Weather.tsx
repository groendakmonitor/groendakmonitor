import React, { useEffect, useState } from "react";
import { useCustomerStore } from "store/store";
import { WeatherResponse } from "../../../models/weather";
import Widget, { WidgetBody, WidgetHeader } from "../Widget";
import Updates from "./Updates";
import './styles/weather.scss';

const Weather = () => {
  // const [loading, setLoading] = useState(true);
  const [data, setData] = useState<WeatherResponse>();

  const customerId = useCustomerStore((data) => data.customerId);
  const customerData = useCustomerStore((data) => data.customerData);
  const fetchCustomerData = useCustomerStore((data) => data.fetchCustomerData);

  useEffect(() => {
    if (customerId && !customerData) {
      fetchCustomerData(customerId)
      //https://openweathermap.org/api/hourly-forecast#geo5
    }
  }, [customerData, customerId, fetchCustomerData])

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
  
  const formattedDate = new Date().toLocaleDateString();
  
  return (
    <Widget className="weather">
      <WidgetHeader className=" d-flex justify-content-between">
        <div className="title">
          { data?.name } 
        </div>
        <div className="subtitle">
          {formattedDate}
        </div>
      </WidgetHeader>
      <WidgetBody className="container">
        <div className="box p-3">
          <div className="row">
            <div className="col-3">
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
        <div className="row mt-3 no-gutters">
          <div className="col-sm-4 text-center pr-2">
            <div className="box h-100">
              <div className="weather_icon weather_full_sun"/>
              {addDay(1).toLocaleDateString()}
            </div>
          </div>
          <div className="col-sm-4 text-center px-2">
            <div className="box h-100">
              <div className="weather_icon weather_sun_rain_clouds"/>
              {addDay(2).toLocaleDateString()}
              </div>
            </div>
          <div className="col-sm-4 text-center pl-2">
            <div className="box h-100">
              <div className="weather_icon weather_thunder"/>
              {addDay(3).toLocaleDateString()}
            </div>
          </div>
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

const addDay = (days: number) => {
  return new Date(new Date().getTime() + days * 86400000);
}