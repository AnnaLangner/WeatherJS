class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.icon = document.getElementById('w-icon');
    this.details = document.getElementById('w-details');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.pressure = document.getElementById('w-pressure');
    this.wind = document.getElementById('w-wind');
  }

  paint(list) {
    this.location.textContent = list.name;
    this.desc.textContent = list.weather[0].description;
    this.string.textContent = `${list.main.temp} °C`;
    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${list.weather[0].icon}@2x.png`);
    this.humidity.textContent = `Realtive Humidity: ${list.main.humidity}%`;
    this.feelsLike.textContent = `Feels Like: ${list.main.feels_like} °C`;
    this.pressure.textContent = `Pressure: ${list.main.pressure} hPa`;
    this.wind.textContent = `Wind Speed: ${list.wind.speed} m/s`;
  }
}