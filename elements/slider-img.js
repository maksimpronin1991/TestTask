const changeImage = function () {

  const fullDate = new Date();
  const hour = fullDate.getHours();
  
  if (hour >= 0 && hour < 6) {
    document.querySelector(".container").style.backgroundImage = "url(./img/01.jpg)";
  } else if (hour >= 6 && hour < 12) {
    document.querySelector(".container").style.backgroundImage = "url(./img/02.jpg)";
  } else if (hour >= 12 && hour < 18) {
    document.querySelector(".container").style.backgroundImage = "url(./img/03.jpg)";
  } else if (hour >= 18) {
    document.querySelector(".container").style.backgroundImage = "url(./img/04.jpg)";
  }

}

export { changeImage };







