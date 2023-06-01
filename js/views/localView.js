import { view } from "./view.js";

class LocalView extends view {
  _parentElement = document.querySelector("main");

  _markup() {
    const locationInfoWrapper = this._createEl(
      "section",
      ["location__info"],
      null
    );
    // Leftside
    const leftWrapper = this._createEl("div", ["location__info--right"], null);
    // City
    const cityEl = this._createEl(
      "div",
      ["location_info_city"],
      `${this._data.city}`
    );
    // State
    const stateEl = this._createEl(
      "div",
      ["location__info_state"],
      `${this._data.state}`
    );
    // Country
    const countryEl = this._createEl(
      "div",
      ["location__info_country"],
      `${this._data.country}`
    );
    leftWrapper.append(cityEl, stateEl, countryEl);

    // Right Side
    const rightWRapper = this._createEl("div", ["location__info--right"], null);
    // Day
    const dayEl = this._createEl(
      "div",
      ["location__info__day"],
      `${this._getDay(this._data.day)}`
    );
    // Time
    const timeEl = this._createEl(
      "div",
      ["location__info__time"],
      `${this._timeFormat(this._data.time)}`
    );
    // Date
    const dateEl = this._createEl(
      "div",
      ["location___info__date"],
      `${this._formatDate(this._data.date)}`
    );

    rightWRapper.append(dayEl, timeEl, dateEl);

    locationInfoWrapper.append(leftWrapper, rightWRapper);
    return locationInfoWrapper;
  }
}

export default new LocalView();
