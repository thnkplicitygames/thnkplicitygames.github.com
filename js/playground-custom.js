/*##########################################################
                        HOME animation
##########################################################*/
 
  /*Animate on scroll*/
  new WOW().init();



/*##########################################################
                        NAVIGATION
##########################################################*/

//Show or hide navigation bar on scrolling
$(function(){
  
  $(window).scroll(function(){

    if($(this).scrollTop() < 200){
      //hide navigation bar
      $("nav").removeClass("thnkplicity-nav-top");

      //Remove back-to top button when the user is at the top of the page
      $("#back-to-top").fadeOut(0500, function(){
        $(this).removeClass("btn-back-to-top");
      });
      
    }
    else{
      //show navigation bar
      $("nav").addClass("thnkplicity-nav-top");

      
      //show back-to-top button
      $("#back-to-top").fadeIn(0020).addClass("btn-back-to-top");

    }
  });
});

//Close mobile-menu on click

$(function(){
  $(".navbar-collapse ul li a").on("click touch", function(){
    $(".navbar-toggle").click();
  });
});