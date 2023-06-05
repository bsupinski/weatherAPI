import { view } from "./view.js";

class MainView extends view {
  _body = document.querySelector("body");

  addClasses(data) {
    this._addDayNightClass(this._dayNight(data.current.currIsDayNight));
  }

  _addDayNightClass(data) {
    this._body.classList.add(data);
  }
}

export default new MainView();
