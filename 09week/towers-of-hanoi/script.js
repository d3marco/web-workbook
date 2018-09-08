'use strict';

$(document).ready(function() {
  console.log('this is working')
  $(function() {
    console.log('in the drag function')
    $('[data-block]').draggable({
      revert: 'invalid'
    });

    $('[data-stack]').droppable({
      drop: function(event, ui) {
        console.log('in the drop function')
        let $last = ($(this).children().last()).data('block');

        $(ui.draggable).appendTo(this).attr('style', 'position:"relative"');

        let $dragging = $(ui.draggable).data('block');

        if ($dragging > $last) {
          $(ui.draggable).draggable('option', 'revert', true);
        } else {
          $(ui.draggable).appendTo(this).attr('style', 'position:"relative"');
        }
      }
    });
  });
});