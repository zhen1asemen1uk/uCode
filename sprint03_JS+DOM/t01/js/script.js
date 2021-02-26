function getFormattedDate(dateObject) {
  let options = {
    weekday: 'long'
  },
    date = {
      data: dateObject.getDate(),
      month: dateObject.getMonth() + 1,
      year: dateObject.getFullYear(),
      hours: dateObject.getHours(),
      minutes: dateObject.getMinutes(),
      weekday: dateObject.toLocaleString("en-US", options),
    };
  if (date.hours >= 0 && date.hours <= 9) {
    date.hours = "0" + date.hours;
  }
  if (date.month >= 0 && date.month <= 9) {
    date.month = "0" + date.month;
  }
  if (date.minutes >= 0 && date.minutes <= 9) {
    date.minutes = "0" + date.minutes;
  }
  if (date.data >= 0 && date.data <= 9) {
    date.data = "0" + date.data;
  }
  return `${date.data}.${date.month}.${date.year} ${(date.hours)}:${(date.minutes)} ${date.weekday}`
}

// const date0 = new Date(1993, 11, 1);
// const date1 = new Date(1998, 0, -33);
// const date2 = new Date("42 13:24:00");

// console.log(getFormattedDate(date0)); // 01.12.1993 00:00 Wednesday
// console.log(getFormattedDate(date1)); // 28.11.1997 00:00 Friday
// console.log(getFormattedDate(date2)); // 01.01.2042 03:24 Wednesday
