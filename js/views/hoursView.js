import { view } from "./view.js";

class HourView extends view {
  _parentElement = document.querySelector("main");

  _markup() {
    const hourSection = this._createEl("section", ["hourly"], null);
    const hourlyHeader = this._createEl(
      "h2",
      ["hourly--section", "section__title"],
      "Hourly"
    );
    hourSection.append(hourlyHeader);

    const hourTable = this._createEl("table", ["hourly__table"], null);

    this._data.map((hour) => {
      const hourRow = this._createEl("tr", ["hourly__hour"], null);

      const dayTimeWrapper = this._createEl("td", ["hourly__dayTime"], null);
      // Day
      const day = this._createEl(
        "div",
        ["hourly__dayTime__day"],
        `${this._getDay(hour.hourDay)}`
      );
      // Time
      const timeData = this._createEl(
        "div",
        ["hourly__dayTime__hour"],
        `${this._timeStartsZero(hour.hourTime)}`
      );
      dayTimeWrapper.append(day, timeData);
      // Icon
      const weatherWrapper = this._createEl("td", ["hourly__weather"], null);
      const icon = this._createEl("div", ["hourly__weather--icon"], null);
      const img = this._createEl("img", [null], null);
      img.src = `icons/${hour.hourIcon}.svg`;
      icon.append(img);
      // Condition
      const condition = this._createEl(
        "div",
        ["hourly__weather--current"],
        `${hour.hourCondition}`
      );
      weatherWrapper.append(icon, condition);
      // Temp
      const tempWrapper = this._createEl("td", ["hourly__temp"], null);
      const tempLabel = this._createEl("div", ["hourly__temp--label"], `Temp`);
      const tempData = this._createEl(
        "div",
        ["hourly__temp--temp"],
        `${hour.hourTemp}°`
      );
      tempWrapper.append(tempLabel, tempData);
      // Wind
      const windWrapper = this._createEl("td", ["hourly__wind"], null);
      const windLabel = this._createEl("div", ["hourly__wind--label"], `Wind`);
      const windData = this._createEl(
        "div",
        ["hourly__wind--speed"],
        `${hour.hourWind}mph`
      );
      windWrapper.append(windLabel, windData);
      // Precip
      const precipWrapper = this._createEl("td", ["hourly__wind"], null);
      const precipLabel = this._createEl(
        "div",
        ["hourly__precip--label"],
        `Precip`
      );
      const precipData = this._createEl(
        "div",
        ["hourly__wind--speed"],
        `${hour.hourPrecip}in`
      );
      precipWrapper.append(precipLabel, precipData);

      hourRow.append(
        dayTimeWrapper,
        weatherWrapper,
        tempWrapper,
        windWrapper,
        precipWrapper
      );
      hourTable.append(hourRow);
    });
    hourSection.append(hourTable);
    return hourSection;
  }
}

export default new HourView();
