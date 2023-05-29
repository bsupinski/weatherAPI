export class view {
  _data;

  render(data) {
    this._data = data;
    const markup = this._markup();
    this._parentElement.insertAdjacmentHtml("afterBegin", markup);
  }

  _daysOfTheWeek = (day) => {
    if (day === "Mon") return "Monday";
    if (day === "Tue") return "Tuesday";
    if (day === "Wed") return "Wednesday";
    if (day === "Thu") return "Thursday";
    if (day === "Fri") return "Friday";
    if (day === "Sat") return "Saturday";
    if (day === "Sun") return "Sunday";
    return day;
  };

  _getDay(apiDate) {
    let localDate = new Date(apiDate).toLocaleDateString();
    let localDay = new Date(localDate).toDateString().slice(0, 3);
    return daysOfTheWeek(localDay);
  }

  _timeFormat = (time) => {
    if (time >= "0:00" && time <= "0:59")
      return `${time.slice(2, 2) + 12 + time.slice(1)} AM`;
    if (time >= "00:00" && time <= "00:59")
      return `${time.slice(2, 2) + 12 + time.slice(2)} AM`;
    if (time >= "1:00" && time <= "1:59") return `${time} AM`;
    if (time >= "12:00" && time <= "12:59") return `${time} PM`;
    if (time >= "13:00" && time <= "23:59")
      return `${time.slice(0, 2) - 12 + time.slice(2)} PM`;
    else return `${time} AM`;
  };

  _timeStartsZero(time) {
    if (time[0] == 0) return this._timeFormat(time.slice(1));
    else return this._timeFormat(time);
  }

  _dayNight(isDay) {
    if (isDay == 0) return "night";
    if (isDay == 1) return "day";
  }
}
