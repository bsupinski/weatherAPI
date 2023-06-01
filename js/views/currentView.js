import { view } from "./view.js";

class CurrentView extends view {
  _parentElement = document.querySelector("main");

  _markup() {
    const section = this._createEl("section", ["current"], null);
    const header = this._createEl(
      "h2",
      ["current--section", "section__title"],
      "Current"
    );

    const sectionWrapper = this._createEl("div", ["current--wrapper"], null);

    const leftSide = this._createEl("div", ["current--left"], null);
    const currentIcon = this._createEl("div", ["current__icon"], null);
    const img = this._createEl("img", [null], null);
    img.src = `../../icons/${this._weatherIconFormat(
      `${this._data.current.currIcon}`
    )}.svg`;
    img.alt = "Todays current weather";
    currentIcon.append(img);

    const dataWrapper = this._createEl("div", ["current__data--wrapper"], null);
    const currentWeather = this._createEl(
      "div",
      ["current__weather"],
      `${this._data.current.currCondition}`
    );
    const currentTemp = this._createEl(
      "div",
      ["current__temp"],
      `${this._data.current.currTemp}°`
    );
    dataWrapper.append(currentWeather, currentTemp);
    leftSide.append(currentIcon, dataWrapper);

    const rightSide = this._createEl("div", ["current--right"], null);

    // Fl Temp
    const currentFlTempWrap = this._createEl(
      "div",
      ["current__info--wrapper", "info-wrapper"],
      null
    );
    const flLabel = this._createEl(
      "div",
      ["current__info__Fl-temp", "info-label"],
      `Fl-Temp`
    );
    const flData = this._createEl(
      "div",
      ["current__info__Fl-temp", "info-data"],
      `${this._data.current.currFlTemp}°`
    );
    currentFlTempWrap.append(flLabel, flData);

    // High
    const currentHigh = this._createEl(
      "div",
      ["current__info--wrapper", "info-wrapper"],
      null
    );
    const highLabel = this._createEl(
      "div",
      ["current__info__high", "info-label"],
      "High"
    );
    const highData = this._createEl(
      "div",
      ["current__info__high--temp", "info-data"],
      `${this._data.highLow.maxTemp}°`
    );
    currentHigh.append(highLabel, highData);

    // Low
    const currentLow = this._createEl(
      "div",
      ["current__info--wrapper", "info-wrapper"],
      null
    );
    const lowLabel = this._createEl(
      "div",
      ["current__info__low", "info-label"],
      "Low"
    );
    const lowData = this._createEl(
      "div",
      ["current__info__low--temp", "info-data"],
      `${this._data.highLow.minTemp}°`
    );
    currentLow.append(lowLabel, lowData);

    // Humidity
    const currentHumidity = this._createEl(
      "div",
      ["current__info--wrapper", "info-wrapper"],
      null
    );
    const humLabel = this._createEl(
      "div",
      ["current__info__humidity", "info-label"],
      "Humidity"
    );
    const humData = this._createEl(
      "div",
      ["current__info__humidity--perc", "info-data"],
      `${this._data.current.currHum}`
    );
    currentHumidity.append(humLabel, humData);

    // Wind
    const currentWind = this._createEl(
      "div",
      ["current__info--wrapper", "info-wrapper"],
      null
    );
    const windLabel = this._createEl(
      "div",
      ["current__info__wind", "info-label"],
      "Wind"
    );
    const windData = this._createEl(
      "div",
      ["current__info__wind--speed", "info-data"],
      `${this._data.current.currWindSp}mph`
    );
    const windDir = this._createEl(
      "div",
      ["current__info__wind--direction", "info-data"],
      `${this._data.current.currWindDir}`
    );
    currentWind.append(windLabel, windData, windDir);

    // Gust
    const currentGust = this._createEl(
      "div",
      ["current__info--wrapper", "info-wrapper"],
      null
    );
    const gustLabel = this._createEl(
      "div",
      ["current__info__gust", "info-label"],
      "Gust"
    );
    const gustData = this._createEl(
      "div",
      ["current__info__gust--speed", "info-data"],
      `${this._data.current.currWindGust}mph`
    );
    currentGust.append(gustLabel, gustData);

    // Visibility
    const currentVis = this._createEl(
      "div",
      ["current__info--wrapper", "info-wrapper"],
      null
    );
    const visLabel = this._createEl(
      "div",
      ["current__info__visibility", "info-label"],
      "Visibility"
    );
    const vistData = this._createEl(
      "div",
      ["current__info__visibility--distance", "info-data"],
      `${this._data.current.currVisi}m`
    );
    currentVis.append(visLabel, vistData);

    // Precip
    const currentPrecip = this._createEl(
      "div",
      ["current__info--wrapper", "info-wrapper"],
      null
    );
    const precipLabel = this._createEl(
      "div",
      ["current__info__precip", "info-label"],
      "Precip"
    );
    const precipData = this._createEl(
      "div",
      ["current__info__precip--inch", "info-data"],
      `${this._data.current.currPrecip}in`
    );
    currentPrecip.append(precipLabel, precipData);

    // AQ
    const currentAq = this._createEl(
      "div",
      ["current__info--wrapper", "info-wrapper"],
      null
    );
    const aqLabel = this._createEl(
      "div",
      ["current__info__air-quality", "info-label"],
      "AirQuality"
    );
    const aqData = this._createEl(
      "div",
      [
        "current__info__air-quality--value",
        "info-data",
        `${this._airQuality(this._data.current.currentAirQuality)}`,
      ],
      `${this._capitalizeFirstLetter(
        this._airQuality(this._data.current.currentAirQuality)
      )}`
    );
    currentAq.append(aqLabel, aqData);

    rightSide.append(
      currentFlTempWrap,
      currentHigh,
      currentLow,
      currentHumidity,
      currentWind,
      currentGust,
      currentVis,
      currentPrecip,
      currentAq
    );

    sectionWrapper.append(leftSide, rightSide);
    section.append(header, sectionWrapper);

    return section;
  }

  _airQuality(aq) {
    if (aq < 3) {
      return "good";
    }
    if (aq < 5) {
      return "unhealthy";
    } else {
      return "hazardous";
    }
  }
}

export default new CurrentView();
