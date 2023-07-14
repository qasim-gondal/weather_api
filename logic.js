const apiKey = 'ba7def81f80bc959acda19c68211dcee';
const apiUrl ='https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}'
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {

    console.log(data);
    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;

    
    const weatherContainer = document.getElementById('weather-container');
    weatherContainer.innerHTML = `Temperature: ${temperature} K<br>Description: ${weatherDescription}`;
  })
  .catch(error => {
    console.log('An error occurred:', error);
  });
