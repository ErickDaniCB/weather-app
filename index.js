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

async function processData (location){
  const data = await getData(location);
  console.log(data);
  return {
    temperatureC: data.current.temp_c,
    temperatureF: data.current.temp_f,
    humidity: data.current.humidity,
    condition: data.current.condition.text
  }
};

async function displayData (location){
  const data = await processData(location);
  
}
