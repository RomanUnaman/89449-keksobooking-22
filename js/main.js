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

function createAd() {
  let titlesList = [
    'Замок',
    'Квартира',
    'Дом',
    'Бунгало',
  ];
  let selectTitle = function () {
    return titlesList[Math.round(Math.random() * (titlesList.length - 1))]
  }
  const titleSelected = selectTitle();

  let typesList = [
    'palace',
    'flat',
    'house',
    'bungalow',
  ];
  let selectType = function () {
    return typesList[titlesList.indexOf(titleSelected)]
  }

  let checkTimes = [
    '12:00',
    '13:00',
    '14:00',
  ];

  let featuresList = [
    'wifi',
    'dishwasher',
    'parking',
    'washer',
    'elevator',
    'conditioner',
  ];
  let selectFeatures = function() {
    let featuresSelectedCount = Math.round(Math.random() * (featuresList.length - 1));
    let featuresSelected = [];

    while (featuresSelected.length < featuresSelectedCount) {
      let feature = featuresList[Math.round(Math.random() * (featuresList.length - 1))];

      if (!featuresSelected.includes(feature)) {
        featuresSelected.push(feature);
      }
    }

    return featuresSelected
  }

  let photosList = [
    'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
  ];
  let selectPhotos = function () {
    let photosSelectedCount = Math.round(Math.random() * (photosList.length - 1));
    let photosSelected = [];

    while (photosSelected.length < photosSelectedCount) {
      let photo = photosList[Math.round(Math.random() * (photosList.length - 1))];

      if (!photosSelected.includes(photo)) {
        photosSelected.push(photo);
      }
    }

    return photosSelected
  }

  let ad = {
    author: {
      avatar: 'img/avatars/user0' + Math.round(Math.random() * 7 + 1) + '.png',
    },
    offer: {
      title: titleSelected,
      address: this.location.x + ', ' + this.location.y,
      price: Math.round(Math.random() * 9000 + 1000),
      type: selectType(),
      rooms: Math.round(Math.random() * 5 + 1),
      guests: Math.round(Math.random() * 11 + 1),
      checkin: checkTimes[Math.round(Math.random() * (checkTimes.length - 1))],
      checkout: checkTimes[Math.round(Math.random() * (checkTimes.length - 1))],
      features: selectFeatures(),
      description: 'Шикарное место',
      photos: selectPhotos(),
      location: {
        x: getRandomFloatBetween(35.65000,35.70000,5),
        y: getRandomFloatBetween(139.70000,139.80000,5),
      },
    },
  }

  return ad
}

function createAdArray(number) {
  let adArray = [];
  for (let i=1; i <= number; i++) {
    adArray.push(createAd())
  }

  return adArray
}

createAdArray(10);
