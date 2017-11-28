
$(document).ready( function(){

  $('#Container').mixItUp({ 
    load: {
      filter: 'all'
    }
  });

});

$('button.showAll').click(function() {
  if ($('div.blankDiv').hasClass('mix') === true) {
    $('div.blankDiv').removeClass('mix');
  }
})

$('button.otherFilters').click(function() {
  if ($('div.blankDiv').hasClass('mix') === false) {
    $('div.blankDiv').addClass('mix');
  }
})
