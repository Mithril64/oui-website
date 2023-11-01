let colors = [
  document.getElementById("color-1"),
  document.getElementById("color-2"),
  document.getElementById("color-3"),
  document.getElementById("color-4"),
];
let container = document.getElementById("effect-wrapper");
let wait = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms));

window.onload = function () {
  for (let color in colors) {
    colors[color].style.transform = "translate(-50%, 0)";
    colors[color].style.top = color * 25 + "%";
    colors[color].style.left = "50%";
    colors[color].style.transition = "0.2s";
  }
  wait(600).then((r) => {
    for (let color in colors) {
      colors[color].style.width = "100%";
      colors[color].style.transition = "1s";
    }
  });
  wait(1200).then((r) => {
    for (let color in colors) {
      colors[color].style.left = (-1) ** color * 400 + "%";
      wait(1000).then((r) => {
        colors[color].style.display = "none";
      });
    }
  });
  wait(1400).then((r) => {
    document.getElementById("main-content").style.display = "block";
  });
};

var map;
function initMap() {
  var map = new google.maps.Map(document.querySelector('.location-map'), {
    center: { lat: 52.784590662222634, lng: 6.891474154635342 },
    zoom: 10, 
  });
}
