$(window).scroll(function() {
    var nav = $("#playbook-nav");
    var blue = $(".blue");
    var white = $(".white");    
    var nav_top = nav.offset().top;
    var blue_top = blue.offset().top;
    var white_top = white.offset().top;
    var nav_bottom = nav_top + nav.height();
    var blue_bottom = blue_top + blue.height();
    var white_bottom = white_top + white.height();

    if (nav_bottom >= blue_top && nav_top < blue_bottom) {
      console.log("blue");
      $( "#playbook-nav > li > a > div" ).addClass( "light-circle" );
      $( "#playbook-nav > li > a > div" ).removeClass( "dark-circle" );
      $( "#playbook-nav > li" ).css({'color': 'white'});
    }
    if (nav_bottom >= white_top && nav_top < white_bottom) {
      console.log("white");
      $( "#playbook-nav > li > a > div" ).addClass( "dark-circle" );
      $( "#playbook-nav > li > a > div" ).removeClass( "light-circle" );
      $( "#playbook-nav > li" ).css({'color': 'black'});
    }

})