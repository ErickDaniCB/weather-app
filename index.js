const searchBar = document.querySelector('#search-box');
const searchButton = document.querySelector('#top-bar>button');
const content = document.querySelector('#content');
let city = document.querySelector('#city');
let condition = document.querySelector('#condition');
let temp = document.querySelector('#temp');
let humidity = document.querySelector('#humi');

//Connect to the API
async function getData(location) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=18ca9c2c7872437398a211815231910&q=${location}&days=3&aqi=no&alerts=no`
    );
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

async function processData(location) {
  const data = await getData(location);
  console.log(data);
  return {
    city: data.location.name,
    condition: data.current.condition.text,
    temperatureC: data.current.temp_c,
    temperatureF: data.current.temp_f,
    humidity: data.current.humidity,
  };
}

async function displayData(location) {
  const data = await processData(location);
  city.textContent = data.city;
  condition.textContent = data.condition;
  temp.textContent = `${data.temperatureC} degrees Celsius`;
  humidity.textContent = `${data.humidity}%`;
}

searchButton.addEventListener('click', () => {
  displayData(searchBar.value);
});
