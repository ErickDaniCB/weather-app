//Connect to the API 
async function getData (location) { 
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=18ca9c2c7872437398a211815231910&q=${location}&aqi=yes`);

  const json = await response.json();
  console.log(json);
};

getData('Madrid');