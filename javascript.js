function currentWeather(response) {
  let temperatureElement = document.querySelector("#current-temperature");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let timeElement = document.querySelector("#time");
  let iconElement = document.querySelector("#icon");
  let date = new Date(response.data.time * 1000);

  temperatureElement.innerHTML = temperature;
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidity.innerHTML = `${response.data.temperature.humidity}%`;
  windElement.innerHTML = `${response.data.wind.speed}km/h`;
  timeElement.innerHTML = formatDate(date);
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}">`;
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }

  return `${day} ${hours}:${minutes}`;
}

function searchCity(city) {
  let apiKey = "edo97t5ec7b58060fa4428df5feafb3a";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiUrl).then(currentWeather);
}

function Search(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search-form-input");
  searchCity(searchInput.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", Search);

searchCity("Kyiv");
