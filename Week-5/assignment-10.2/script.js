// Temperature data
const temperatureData = {
  "New York": 20,
  London: 18,
  Paris: 22,
  Tokyo: 25,
  Sydney: 28,
};

// Memoization function
function memoize(func) {
  let cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    } else {
      const result = func.call(this, args);
      cache[key] = result;
      return result;
    }
  };
}

// Get temperature for city
function getTemperatureForCity(cityName) {
  return temperatureData[cityName];
}

const memoizeTemperatureForCity = memoize(getTemperatureForCity);

// Memoized temperature for city
const temperature1 = memoizeTemperatureForCity("New York");
console.log(temperature1); // 20

const temperature2 = memoizeTemperatureForCity("New York");
console.log(temperature2); // 20 (retrieved from cache)

const temperature3 = memoizeTemperatureForCity("London");
console.log(temperature3); // 18

const temperature4 = memoizeTemperatureForCity("London");
console.log(temperature4); // 18 (retrieved from cache)
