var pikePlace = {
  min: 17,
  max: 88,
  avg: 5.2,
  total: 0,
  timeOfDay: ['Ten:', 'Eleven:', 'Twelve:', 'One:', 'Two:', 'Three:', 'Four:', 'Five:'],
  cookiesPurchasedArray: [],

  randCustPerHour: function() {
    return Math.random() * (this.max - this.min + 1) + this.min;
  },
  cookiesPurchased: function() {
    for ( var i = 0; i < this.timeOfDay.length; i++) {
      var rand = this.avg * this.randCustPerHour();
      this.cookiesPurchasedArray.push(rand);
      this.total += rand;
    }
  },
  renderCookiesPerHour: function() {
    this.cookiesPurchased();
    var ul = document.createElement('ul');
    document.body.appendChild(ul);
    ul.appendChild(document.createTextNode('Pike Place'));

    for (var i = 0; i < this.timeOfDay.length; i++) {
      var li = document.createElement('li');
      li.appendChild(document.createTextNode(this.timeOfDay[i] + Math.floor(this.cookiesPurchasedArray[i])));
      ul.appendChild(li);
    }

    var li2 = document.createElement('li');
    li2.appendChild(document.createTextNode('Total: ' + Math.floor(this.total)));
    ul.appendChild(li2);
  },
};

var seaTacAir = {
  min: 6,
  max: 24,
  avg: 1.2,
  total: 0,
  timeOfDay: ['Ten: ', 'Eleven: ', 'Twelve: ', 'One: ', 'Two: ', 'Three: ', 'Four: ', 'Five: '],
  cookiesPurchasedArray: [],

  randCustPerHour: function() {
    return Math.random() * (this.max - this.min + 1) + this.min;
  },
  cookiesPurchased: function() {
    for ( var i = 0; i < this.timeOfDay.length; i++) {
      var rand = this.avg * this.randCustPerHour();
      this.cookiesPurchasedArray.push(rand);
      this.total += rand;
    }
  },
  renderCookiesPerHour: function() {
    this.cookiesPurchased();
    var ul = document.createElement('ul');
    document.body.appendChild(ul);
    ul.appendChild(document.createTextNode('Sea Tac Airport'));

    for (var i = 0; i < this.timeOfDay.length; i++) {
      var li = document.createElement('li');
      li.appendChild(document.createTextNode(this.timeOfDay[i] + Math.floor(this.cookiesPurchasedArray[i])));
      ul.appendChild(li);
    }

    var li2 = document.createElement('li');
    li2.appendChild(document.createTextNode('Total: ' + Math.floor(this.total)));
    ul.appendChild(li2);
  },
};

var southCenter = {
  min: 11,
  max: 38,
  avg: 1.9,
  total: 0,
  timeOfDay: ['Ten: ', 'Eleven: ', 'Twelve: ', 'One: ', 'Two: ', 'Three: ', 'Four: ', 'Five: '],
  cookiesPurchasedArray: [],

  randCustPerHour: function() {
    return Math.random() * (this.max - this.min + 1) + this.min;
  },
  cookiesPurchased: function() {
    for (var i = 0; i < this.timeOfDay.length; i++) {
      var rand = this.avg * this.randCustPerHour();
      this.cookiesPurchasedArray.push(rand);
      this.total += rand;
    }
  },

  renderCookiesPerHour: function() {
    this.cookiesPurchased();
    var ul = document.createElement('ul');
    document.body.appendChild(ul);
    ul.appendChild(document.createTextNode('South Center'));

    for (var i = 0; i < this.timeOfDay.length; i++) {
      var li = document.createElement('li');
      li.appendChild(document.createTextNode(this.timeOfDay[i] + Math.floor(this.cookiesPurchasedArray[i])));
      ul.appendChild(li);
    }

    var li2 = document.createElement('li');
    li2.appendChild(document.createTextNode('Total: ' + Math.floor(this.total)));
    ul.appendChild(li2);
  },
};

var bellevueSquare = {
  min: 20,
  max: 48,
  avg: 3.3,
  total: 0,
  timeOfDay: ['Ten: ', 'Eleven: ', 'Twelve, ', 'One: ', 'Two, ', 'Three, ', 'Four: ', 'Five: '],
  cookiesPurchasedArray: [],

  randCustPerHour: function() {
    return Math.random() * (this.max - this.min + 1) + this.min;
  },
  cookiesPurchased: function(){
    for (var i = 0; i < this.timeOfDay.length; i++) {
      var rand = this.avg * this.randCustPerHour();
      this.cookiesPurchasedArray.push(rand);
      this.total += rand;
    }
  },

  renderCookiesPerHour: function() {
    this.cookiesPurchased();
    var ul = document.createElement('ul');
    document.body.appendChild(ul);
    ul.appendChild(document.createTextNode('Bellevue Square'));

    for (var i = 0; i < this.timeOfDay.length; i++) {
      var li = document.createElement('li');
      li.appendChild(document.createTextNode(this.timeOfDay[i] + Math.floor(this.cookiesPurchasedArray[i])));
      ul.appendChild(li);
    }
    var li2 = document.createElement('li');
    li2.appendChild(document.createTextNode('Total: ' + Math.floor(this.total)));
    ul.appendChild(li2);
  },
};
