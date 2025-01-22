const { getWeather } = require('./weather');

test('returns sunny for New York', () => {
  expect(getWeather('New York')).toBe('Sunny');
});

test('returns rainy for London', () => {
  expect(getWeather('London')).toBe('Rainy');
});

test('throws error when city is not found', () => {
  expect(() => getWeather('Paris')).toThrow('City not found');
});