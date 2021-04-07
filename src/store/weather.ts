import { WeatherResponse } from "models/weather";
import create from "zustand";

type WeatherStore = {
  weatherData?: WeatherResponse,
  fetchWeatherData(lat: number, lon: number): void,
}

export const useWeatherStore = create<WeatherStore>(
  (set, get): WeatherStore => ({
    weatherData: undefined,

    fetchWeatherData(lat: number, lon: number): void {
      fetch(`${process.env.REACT_APP__OPEN_WEATHER_MAP_URL}/forecast?lat=${lat}&lon=${lon}&lang=nl&units=metric&appid=${process.env.REACT_APP__OPEN_WEATHER_MAP_API}`)
        .then<WeatherResponse>(res => res.json())
        .then((data) => {
          set({
            weatherData: data
          })
        })
    }
  })
)