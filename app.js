headerArr = ['','Ten:', 'Eleven:', 'Twelve:', 'One:', 'Two:', 'Three:', 'Four:', 'Five:', 'Total:'];

function renderTableheader() {
  var header = document.getElementById('storeTable');
  for (var i = 0; i < headerArr.length; i++){
    var newTh = document.createElement('th');
    var headerName = document.createTextNode(headerArr[i]);
    newTh.appendChild(headerName);
    header.appendChild(newTh);
  };
}
  renderTableheader();

  function cookieShop(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.total = 0;
    this.cookiesPurchasedArray = [];

    this.randCustPerHour = function(){
      return Math.random() * (this.max - this.min + 1) + this.min;
    };

    this.cookiesPurchased = function() {
      for ( var i = 0; i < 8; i++) {
        var rand = this.avg * this.randCustPerHour();
        this.cookiesPurchasedArray.push(rand);
        this.total += rand;
      };
    };


    this.renderCookiesPerHour = function() {
      this.cookiesPurchased();
      var table = document.getElementById('storeTable');
      var tr = document.createElement('tr');
      table.appendChild(tr);
      var tdNames = document.createElement('td');
      tdNames.appendChild(document.createTextNode(this.name));
      tr.appendChild(tdNames);

      for (var i = 0; i < 8; i++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(Math.floor(this.cookiesPurchasedArray[i]) + ' cookies'));
        tr.appendChild(td);
      }
      var td2 = document.createElement('td');
      td2.appendChild(document.createTextNode(Math.floor(this.total) + ' cookies'));
      tr.appendChild(td2);
    };

  }

  function handleFormSubmit(event) {
  event.preventDefault();
  console.log(event);

  var name = event.target.name.value;
  var min = parseFloat(event.target.min.value);
  var max = parseFloat(event.target.max.value);
  var avg = parseFloat(event.target.avg.value);

  var newCookieShop = new cookieShop(name, min, max, avg);
  newCookieShop.renderCookiesPerHour();

  // renderCookiesPerHour(newCookieShop);
  // tfoot.innerHTML = ''
  // makeTotalRow();

  event.target.name.value = null;
  event.target.min.value = null;
  event.target.max.value = null;
  event.target.avg.value = null;
}


form.addEventListener('submit', handleFormSubmit);


  var pikePlace = new cookieShop('Pike-Place ', 17, 88, 5.2);
  pikePlace.renderCookiesPerHour();

  var seaTacAir = new cookieShop('Sea Tac Airport ', 6, 24, 1.2);
  seaTacAir.renderCookiesPerHour();

  var southCenter = new cookieShop('South Center ', 11, 38, 1.9);
  southCenter.renderCookiesPerHour();

  var bellevueSquare = new cookieShop('Bellevue Square ', 20, 48, 3.3);
  bellevueSquare.renderCookiesPerHour();

  var alki = new cookieShop('Alki ', 3, 24, 2.6);
  alki.renderCookiesPerHour();
