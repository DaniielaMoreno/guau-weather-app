let city = "";

function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("input");
  city = searchInput.value;
  let cityElement = document.querySelector(".current-city");
  cityElement.innerHTML = city;

  let apiKey = "97fab40oeb1c82af2b7390d7e00fac2t";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}

function showTemperature(response) {
  let temperature = Math.round(response.data.temperature.current);
  let humidity = response.data.temperature.humidity;
  let wind = Math.round(response.data.wind.speed);
  let description = response.data.condition.description;

  let descriptionElement = document.querySelector("#weatherDescription");
  descriptionElement.innerHTML = description;

  let humidityElement = document.querySelector("#humidityValue");
  humidityElement.innerHTML = `${humidity}%`;
  let temperatureElement = document.querySelector("#currentTemperatureValue");
  temperatureElement.innerHTML = `${temperature}`;
  let windElement = document.querySelector("#windValue");
  windElement.innerHTML = `${wind}km/h`;
}

function formatTime() {
  let currentDay = document.querySelector("#actualDay");
  let currentTime = document.querySelector("#actualTime");
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hour < 10) {
    hour = `0${hour}`;
  }
  currentDay.innerHTML = `${day}`;
  currentTime.innerHTML = `${hour}:${minutes}`;
}

let form = document.querySelector("form");
form.addEventListener("submit", searchCity);

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hour = now.getHours();
let minutes = now.getMinutes();

formatTime();
