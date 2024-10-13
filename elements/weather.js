const apiKey = "83c0ffd7846a91cae7d7145b4ffa0cbf";
let myStorage = window.localStorage;

myStorage.setItem("defaultLat", "45.039268");
myStorage.setItem("defaultLon", "38.987221");
const succesCall = (position) => {
  myStorage.setItem("lat", position.coords.latitude);
  myStorage.setItem("lon", position.coords.longitude);
}

const errorCall = () => {  
  getWeather(myStorage.getItem("defaultLat"), myStorage.getItem("defaultLon"));
}

navigator.geolocation.getCurrentPosition(succesCall, errorCall);



async function getWeather(lat="45.039268", lon="38.987221") {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${apiKey}`);
  
    const data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";

    if (data.weather[0].main === "Clear") {
      document.querySelector(".weather-icon").src = "./img/sunn.png";
    }

    else if (data.weather[0].main === "Clouds") {
      document.querySelector(".weather-icon").src = "./img/cloudy.png";
    }

    else if (data.weather[0].main === "Rain") {
      document.querySelector(".weather-icon").src = "./img/rain.png";
    }

    else if (data.weather[0].main === "Drizzle") {
      document.querySelector(".weather-icon").src = "./img/rainy.png";
    }

    else if (data.weather[0].main === "Mist") {
      document.querySelector(".weather-icon").src = "./img/rainy.png";
    }

    else if (data.weather[0].main === "Snow") {
      document.querySelector(".weather-icon").src = "./img/snowy.png";
    }
  }



  export { getWeather };
