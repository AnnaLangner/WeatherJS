class Weather {
  constructor(city) {
    this.apiKey = '8dea4fd144982b4de3f9dd86c9c6b0b6';
    this.city = city;
  }

  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.apiKey}`);
   
    const responseData = await response.json();
   
    return responseData;
  }

  changeLocation(city) {
    this.city = city;
  }
}