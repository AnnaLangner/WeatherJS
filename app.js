const storage = new Storage();
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city);
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

const wChangeBtn = document.getElementById('w-change-btn');
wChangeBtn.addEventListener('click', (e) => {
  const city = document.getElementById('city').value;

  weather.changeLocation(city);
  storage.setLocationData(city);
  getWeather();
  $('#locModal').modal('hide');
});


function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(error => console.log(error));
}