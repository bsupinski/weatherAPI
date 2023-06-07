import { view } from "./view.js";

class MainView extends view {
  _body = document.querySelector("body");

  onLoad(data) {
    this._addDayNightClass(this._dayNight(data.current.currIsDayNight));
    this.removeModal();
  }

  _addDayNightClass(data) {
    this._body.classList.add(data);
  }

  removeModal() {
    document.querySelector(".module").style.display = "none";
  }

  getManualCoords() {
    const coords = document.getElementById("zipCode").value;
    return coords;
  }
}

export default new MainView();
