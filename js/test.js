const daysOfTheWeek = (day) => {
  if (day === "Mon") return "Monday";
  if (day === "Tue") return "Tuesday";
  if (day === "Wed") return "Wednesday";
  if (day === "Thu") return "Thursday";
  if (day === "Fri") return "Friday";
  if (day === "Sat") return "Saturday";
  if (day === "Sun") return "Sunday";
};

const currentDay = () => {
  const date = new Date();
  const day = date.toDateString().slice(0, 3);

  return daysOfTheWeek(day);
};

const test = currentDay();

console.log(test);
