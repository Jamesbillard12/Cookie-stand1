var pikesPlace = {
  min: 17,
  max: 88,
  avg: 5.2,
  timeOfDay: ['Ten:', 'Eleven:', 'Twelve:', 'One:', 'Two:', 'Three:', 'Four:', 'Five:'],
  cookiesPurchasedArray: [],

  randCustPerHour: function() {
    return Math.random() * (this.max - this.min + 1) + this.min;
  },

  cookiesPurchased: function() {
    for ( var i = 0; i < this.timeOfDay.length; i++) {
      this.cookiesPurchasedArray.push(this.avg * this.randCustPerHour());
    }
  },
  numberCookiesPerHour: function() {
    for (var i = 0; i < 7; i++) {
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(this.timeOfDay[i] + Math.floor(this.randCustPerHour(this.min, this.max)*(this.avg))));
      ul.appendChild(li)
    }

  },
}
