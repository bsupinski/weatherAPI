let test = new Date("2023-05-30").toLocaleString();
test;
console.log(test);

const city = "Coventry";
const state = "Rhode Island";
const country = "USA";
const day = "Monday";
const time = "12:22AM";
const date = "12/12/2022";

const _createEl = (el, className, text) => {
  let newElement = document.createElement(el);
  newElement.classList.add(...className);
  newElement.innerText = text;
  return newElement;
};

const leftWrapper = _createEl("div", ["location__info--right"], null);
const cityEl = _createEl("div", ["location__info_city"], `${city}`);
const stateEl = _createEl("div", ["location__info_state"], `${state}`);
const countryEl = _createEl("div", ["location__info_country"], `${country}`);
leftWrapper.append(cityEl, stateEl, countryEl);
const locationInfo = document.querySelector(".location__info");
locationInfo.appendChild(leftWrapper);

console.log(leftWrapper);
