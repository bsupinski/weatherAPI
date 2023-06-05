import { view } from "./view.js";

class DaysView extends view {
  _parentElement = document.querySelector("main");

  _markup() {
    const section = this._createEl("section", ["daily"], null);
    const header = this._createEl(
      "h2",
      ["daily--section", "section__title"],
      "FiveDay"
    );
    section.append(header);
    const fiveDayWrapper = this._createEl("div", ["daily--wrapper"], null);
    this._data.map((day) => {
      const dayWrapper = this._createEl("div", ["daily__day--wrapper"]);
      const dayIcon = this._createEl("div", ["daily__day--icon"], null);

      const dayDay = this._createEl(
        "div",
        ["daily__day__day"],
        `${this._fiveDayDaysFormat(day.fiveDayDate)}`
      );

      const dayImg = this._createEl("img", [null], null);
      dayImg.src = `icons/${this._weatherIconFormat(`${day.fiveDayIcon}`)}.svg`;
      dayImg.alt = `${day.fiveDayCondition}`;
      dayIcon.append(dayImg);

      const dayWeather = this._createEl(
        "div",
        ["daily__weather"],
        `${day.fiveDayCondition}`
      );
      const dayTempWrapper = this._createEl(
        "div",
        ["daily__temp--wrapper"],
        null
      );
      const dayHigh = this._createEl(
        "div",
        ["daily__temp__high"],
        `H:${day.fiveDayHigh}°`
      );
      const dayLow = this._createEl(
        "div",
        ["daily__temp__low"],
        `H:${day.fiveDayLow}°`
      );
      dayTempWrapper.append(dayHigh, dayLow);
      dayWrapper.append(dayDay, dayIcon, dayWeather, dayTempWrapper);
      fiveDayWrapper.append(dayWrapper);
    });

    section.append(fiveDayWrapper);
    return section;
  }

  _fiveDayDaysFormat(date) {
    if (date === this._data[0].fiveDayDate) return "Today";
    if (date === this._data[1].fiveDayDate) return "Tomorrow";
    else return this._getDay(date);
    r34;
  }
}

export default new DaysView();
