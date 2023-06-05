import { KEY } from "./config.js";

export const state = {
  location: {},
  current: {},
  highLow: {},
  hourly: {},
  fiveDay: {},
};

const getLocationState = (data) => {
  const { location } = data;
  return {
    city: location.name,
    state: location.region,
    country: location.country,
    day: location.localtime.split(" ")[0],
    time: location.localtime.split(" ")[1],
    date: location.localtime.split(" ")[0],
  };
};

const getCurrentState = (data) => {
  const { current } = data;
  return {
    currIcon: `${current.condition.text}${current.is_day}`,
    currCondition: current.condition.text,
    currTemp: parseInt(current.temp_f),
    currFlTemp: parseInt(current.feelslike_f),
    currHum: `${current.humidity}%`,
    currWindSp: parseInt(current.wind_mph),
    currWindDir: current.wind_dir,
    currWindGust: parseInt(current.gust_mph),
    currVisi: current.vis_miles,
    currPrecip: current.precip_in,
    currAirQuality: current.air_quality["us-epa-index"],
    currIsDayNight: current.is_day,
  };
};

const getCurrentHighLowState = (data) => {
  const { forecast } = data;
  return {
    maxTemp: parseInt(forecast.forecastday[0].day.maxtemp_f),
    minTemp: parseInt(forecast.forecastday[0].day.mintemp_f),
  };
};

const getFiveDayState = (data) => {
  const { forecast } = data;
  return forecast.forecastday.map((day) => {
    return {
      fiveDayDate: day.date,
      fiveDayIcon: `${day.day.condition.text}${data.current.is_day}`,
      fiveDayCondition: day.day.condition.text,
      fiveDayHigh: parseInt(day.day.maxtemp_f),
      fiveDayLow: parseInt(day.day.mintemp_f),
    };
  });
};

const getHourlyState = (data) => {
  const { forecast } = data;
  return forecast.forecastday[0].hour
    .concat(forecast.forecastday[1].hour)
    .filter((hour) => hour.time_epoch > data.location.localtime_epoch)
    .slice(0, 12)
    .map((hour) => {
      return {
        hourDay: hour.time.split(" ")[0],
        hourTime: hour.time.split(" ")[1],
        hourIcon: `${hour.condition.text}${hour.is_day}`,
        hourCondition: hour.condition.text,
        hourTemp: parseInt(hour.temp_f),
        hourWind: parseInt(hour.wind_mph),
        hourPrecip: parseInt(hour.precip_in),
        hourDayNight: hour.is_day,
      };
    });
};

export const fetchWeather = async function (coords) {
  try {
    const response = await fetch(
      `HTTPS://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${coords}&days=5&aqi=yes&alerts=no`
    );
    const data = await response.json();
    state.location = getLocationState(data);
    state.current = getCurrentState(data);
    state.highLow = getCurrentHighLowState(data);
    state.fiveDay = getFiveDayState(data);
    state.hourly = getHourlyState(data);
    console.log(data);
  } catch (error) {
    throw error;
  }
};
