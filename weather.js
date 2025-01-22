function getWeather(city) {
    const weatherData = {
      'New York': 'Sunny',
      'London': 'Rainy',
      'Tokyo': 'Cloudy',
    };
  
    if (!weatherData[city]) {
      throw new Error('City not found');
    }
  
    return weatherData[city];
  }
  
module.exports = { getWeather };