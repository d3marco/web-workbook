'use strict';

document.addEventListener("DOMContentLoaded", function(event) {

window.onload = function() {

var count = document.querySelectorAll('li');
console.log(count.length);

var newh2 = document.createElement('h2');
newh2.innerHTML = 'You have ' + count.length + ' items in your shopping cart.'
document.getElementsByTagName('h1')[0].append(newh2);
alert('You have ' + count.length + ' items in your shopping cart.');


function addedItem(){
  var ul
}
}
