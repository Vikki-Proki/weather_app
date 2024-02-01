function currentWeather(response) {
  let temperatureElement = document.querySelector("#current-temperature");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city");
  let descriptionElement = document.querySelector("#weather-description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");

  temperatureElement.innerHTML = Math.round(temperature);
  cityElement.innerHTML = response.data.city;
  descriptionElement = response.data.condition.description;
  humidity.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = response.data.wind.speed;
}

function searchCity(city) {
  let apiKey = edo97t5ec7b58060fa4428df5feafb3a;
  let apiUrl =
    "https://api.shecodes.io/weather/v1/current?query={query}&key={key}";

  axios.get(apiUrl).then(searchCity);
}

function search(event) {
  event.preventDefault();
}
let searchInput = document.querySelector("#search-form-input");
searchCity(searchInput.value);

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("click", search);

searchCity("Kyiv");
