const { use } = require("browser-sync");

'use strict';
function getRandomIntBetween(min,max) {
  if (min < 0 || max < 0) {
    console.log('Аргументами функции getRandomIntBetween(min,max) могут быть только положительные числа, включая 0.')
    return undefined;
  }
  let result = Math.round(Math.random() * (Math.abs(min - max)) + Math.min(max,min));
  return result;
}

function getRandomFloatBetween(min,max,decimal_places) {
  if (min < 0 || max < 0 || decimal_places < 0) {
    console.log('Аргументами функции getRandomFloatBetween(min,max,decimal_places) могут быть только положительные числа, включая 0.')
    return undefined;
  }
  let result = Math.random() * (Math.abs(min - max)) + Math.min(max,min);
  return result.toFixed(decimal_places);
}
