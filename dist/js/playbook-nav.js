function touching(div1, div2) { 
  var div1_top = div1.offset().top;
  var div2_top = div2.offset().top;

  var div1_bottom = div1_top + div1.height();
  var div2_bottom = div2_top + div2.height();

  if (div1_bottom >= div2_top && div1_top < div2_bottom) {
    return true;
  }
  return false;
}
function currentSection(section, string) {
  if (touching(section, $("#playbook-nav"))){
      $( "#playbook-nav > li > a > div" ).removeClass( "current-circle" );
      $('a[href="'+string+'"] > div').addClass( "current-circle" );
  }
}

function setNav(){
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
        touching($("#section-07"), $("#playbook-nav"))
      ){
      $( "#playbook-nav > li > a > div" ).addClass( "light-circle" );
      $( "#playbook-nav > li > a > div" ).removeClass( "dark-circle" );
      $( "#playbook-nav > li" ).css({'color': 'white'});
    }
    currentSection($("#intro"), "#intro");
    currentSection($("#01"), "#01");
    currentSection($("#02"), "#02");
    currentSection($("#03"), "#03");
    currentSection($("#04"), "#04");
    currentSection($("#05"), "#05");
    currentSection($("#06"), "#06");
    currentSection($("#section-07"), "#section-07");
}

$(document).ready(function(){
  setNav();
  $(window).scroll(function() {
      setNav();
    });
});