const weekday = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const date = new Date();

const time = document.querySelector('#time');
const day = document.querySelector('#day');

day.textContent = weekday[date.getDay()];
time.textContent = date.getUTCMilliseconds();
