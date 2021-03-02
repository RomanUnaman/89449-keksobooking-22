function getRandomIntBetween(min, max) {

  if (min < 0 || max < 0) {

    return undefined;

  }

  return (Math.round(Math.random() * (Math.abs(min - max)) + Math.min(max,min)));

}

getRandomIntBetween(2, 8);


function getRandomFloatBetween(min, max, decimalPlaces) {

  if (min < 0 || max < 0 || decimalPlaces < 0) {

    return undefined;

  }

  return (Math.random() * (Math.abs(min - max)) + Math.min(max,min)).toFixed(decimalPlaces);

}

getRandomFloatBetween(17, 8, 3);
