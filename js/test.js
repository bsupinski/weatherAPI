const daysOfTheWeek = (day) => {
  if (day === "Mon") return "Monday";
  if (day === "Tue") return "Tuesday";
  if (day === "Wed") return "Wednesday";
  if (day === "Thu") return "Thursday";
  if (day === "Fri") return "Friday";
  if (day === "Sat") return "Saturday";
  if (day === "Sun") return "Sunday";
};

const getDay = (apiDate) => {
  let localDate = new Date(apiDate).toLocaleDateString();
  let localDay = new Date(localDate).toDateString().slice(0, 3);
  return daysOfTheWeek(localDay);
};

const testDay = getDay("2023-05-29");

console.log(testDay);
