const weather = new Weather('Boston');
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

//weather.changeLocation("Gdansk")

function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(error => console.log(error));
}