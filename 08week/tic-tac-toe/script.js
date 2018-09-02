'use strict';

$(document).ready(function() {
  var turn = 'X';

  $('[data-cell]').on('click', function() {
    if ($(this).text() === '') {
      $(this).text(turn);
      if(turn === 'X') {
        turn = 'O';
      }else{
        turn = 'X';
      }
    }
    winner('');
  })
});

function winner(''){
if('[data-cell="0"]').text( === 'X')
];
