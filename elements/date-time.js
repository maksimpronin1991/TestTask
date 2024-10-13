import { months, dayNames } from "../helper.js";
function updateClock() {
  const dateNow = new Date();

  let hours = dateNow.getHours();
  let minutes = dateNow.getMinutes();
  let seconds = dateNow.getSeconds();
  let day = dateNow.getDate();
  let weekday = dateNow.getDay();
  let month = dateNow.getMonth();
  if(hours < 10) {
    hours = '0' + hours;
  }
  if(minutes < 10) {
    minutes = '0' + minutes;
  }
  if(seconds < 10) {
    seconds = '0' + seconds;
  }
  if(day < 10) {
    day = '0' + day;
  }


  document.querySelector('.hours').textContent = hours;
  document.querySelector('.minutes').textContent = minutes;
  document.querySelector('.seconds').textContent = seconds;

  document.querySelector('.day').textContent = day;
  document.querySelector('.month').textContent = months[month];

  document.querySelector('.dayOfWeek').textContent = dayNames[weekday];
}

export { updateClock };