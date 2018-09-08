'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
  window.onload = function() {
    let itemCount = document.querySelectorAll('li');
    // console.log(itemCount.length);
    let newh2 = document.createElement('h2');
    newh2.innerHTML = 'You have ' + itemCount.length + ' items in your shopping cart.'
    // console.log(newh2);
    document.getElementsByTagName('h1')[0].append(newh2);
    alert('You have ' + itemCount.length + ' items in your shopping cart.');
  };

});