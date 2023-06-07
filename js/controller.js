import * as model from "./model.js";
import mainView from "./views/mainView.js";
import localView from "./views/localView.js";
import currentView from "./views/currentView.js";
import daysView from "./views/daysView.js";
import hoursView from "./views/hoursView.js";

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
  try {
    if ((GeolocationPositionError.code = 1)) {
      document.getElementById("modal").addEventListener("submit", async (e) => {
        e.preventDefault();
        await model.fetchWeather(mainView.getManualCoords());
        renderWeather();
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const renderWeather = () => {
  mainView.onLoad(model.state);
  localView.render(model.state.location);
  currentView.render(model.state);
  daysView.render(model.state.fiveDay);
  hoursView.render(model.state.hourly);
};

window.addEventListener("load", userLocation);
