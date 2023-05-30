import * as model from "./model.js";
import localView from "./views/localView.js";

const userLocation = async function () {
  navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack);
};

const successCallBack = async function (position) {
  try {
    const { latitude, longitude } = position.coords;
    const coords = [latitude, longitude].toString();
    await model.fetchWeather(coords);
    renderWeather();
  } catch (error) {
    console.log(error);
  }
};

const errorCallBack = async function (error) {
  console.log("Hi");
};

const renderWeather = () => {
  console.log(model.state.location);
  localView.render(model.state.location);
};

window.addEventListener("load", userLocation);
