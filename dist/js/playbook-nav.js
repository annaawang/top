function touching($div1, $div2) { 
  var div1_top = $div1.offset().top;
  var div2_top = $div2.offset().top;

  var div1_bottom = div1_top + $div1.height();
  var div2_bottom = div2_top + $div2.height();

  if (div1_bottom >= div2_top && div1_top < div2_bottom) {
    return true;
  }
  return false;
}

$(window).scroll(function() {
    if (touching($("#intro"), $("#playbook-nav")) ||
        touching($("#02"), $("#playbook-nav")) ||
        touching($("#04"), $("#playbook-nav")) ||
        touching($("#06"), $("#playbook-nav"))
      ){
      $( "#playbook-nav > li > a > div" ).addClass( "dark-circle" );
      $( "#playbook-nav > li > a > div" ).removeClass( "light-circle" );
      $( "#playbook-nav > li" ).css({'color': 'black'});
    }

    if (touching($("#01"), $("#playbook-nav")) ||
        touching($("#03"), $("#playbook-nav")) ||
        touching($("#05"), $("#playbook-nav")) ||
        touching($("#07"), $("#playbook-nav"))
      ){
      $( "#playbook-nav > li > a > div" ).addClass( "light-circle" );
      $( "#playbook-nav > li > a > div" ).removeClass( "dark-circle" );
      $( "#playbook-nav > li" ).css({'color': 'white'});
    }
});