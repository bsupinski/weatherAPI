import * as model from "./model.js";

const userLocation = async function () {
  navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack);
  console.log("hello");
};

const successCallBack = async function (position) {
  try {
    const { latitude, longitude } = position.coords;
    const coords = [latitude, longitude].toString();
    await model.fetchWeather(coords);
  } catch (error) {
    console.log(error);
  }
};

const errorCallBack = async function (error) {
  console.log("Hi");
};

window.addEventListener("load", userLocation);
