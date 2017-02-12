var pikesPlace = {
  min: 17,
  max: 88,
  avgCookieSale: 5.2,
  randCustPerHour: function (min, max) {
    return Math.random() * (max - min) + min
  }
}
