import { getWeather } from "./elements/weather.js";
import { changeImage } from "./elements/slider-img.js";
import { updateClock } from "./elements/date-time.js";
import  "./elements/todo-list.js";


const myStorage = window.localStorage;

getWeather(myStorage.getItem("lat"), myStorage.getItem("lon"));
setInterval(changeImage, 1000)
setInterval(updateClock, 1000)