export const iconToClassName = (icon: string) => {
  switch (icon) {
    case "01n": 
    case "01d":
      return "weather_full_sun";
    case "02n": 
    case "02d":
      return "weather_few_clouds" ;
    case "03n": 
    case "03d":
    case "04n": 
    case "04d":
    case "50n": 
    case "50d":
      return "weather_full_clouds" ;
    case "09n": 
    case "09d":
      return "weather_rainy" ;
    case "10n": 
    case "10d":
      return "weather_sun_rain_clouds" ;
    case "11n": 
    case "11d":
      return "weather_thunder" ;
    case "13n": 
    case "13d":
      return "weather_snow" ;
  }
}
