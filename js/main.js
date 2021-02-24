function getRandomIntBetween(min,max) {
  if (min < 0 || max < 0) {
    return undefined;
  }
  let result = Math.round(Math.random() * (Math.abs(min - max)) + Math.min(max,min));
  return result;
}
let randomInt = getRandomIntBetween(2,8);


function getRandomFloatBetween(min,max,decimal_places) {
  if (min < 0 || max < 0 || decimal_places < 0) {
    return undefined;
  }
  let result = Math.random() * (Math.abs(min - max)) + Math.min(max,min);
  return result.toFixed(decimal_places);
}
let randomFloat = getRandomFloatBetween(17,8,3);
