var pikePlace = {
  min: 17,
  max: 88,
  avg: 5.2,
  timeOfDay: ['Ten:', 'Eleven:', 'Twelve:', 'One:', 'Two:', 'Three:', 'Four:', 'Five:'],
  cookiesPurchasedArray: [],

  randCustPerHour: function() {
    return Math.random() * (this.max - this.min + 1) + this.min;
  },
  total: 0,
  cookiesPurchased: function() {
    for ( var i = 0; i < this.timeOfDay.length; i++) {
      var rand = this.avg * this.randCustPerHour();
      this.cookiesPurchasedArray.push(rand);
      this.total += rand;
    }
  },
  renderCookiesPerHour: function() {
    this.cookiesPurchased();
    var idPikePlace = document.createElement('ul');
    idPikePlace.id ='pikePlace';
    var body = document.querySelector('body');
    idPikePlace = document.createTextNode('Pike Place');
    body.appendChild(idPikePlace);
    var ul = document.getElementById('pikePlace');
    for (var i = 0; i < this.timeOfDay.length; i++) {
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(this.timeOfDay[i] + Math.floor(this.cookiesPurchasedArray[i])));
      idPikePlace.appendChild(li);

    }
    var li2 = document.createElement("li");
    li2.appendChild(document.createTextNode("Total: " + Math.floor(this.total)));
    idPikePlace.appendChild(li2);
  },
} 
