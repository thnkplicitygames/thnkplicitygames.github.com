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
      $("#back-to-top").fadeIn(0020, function(){
        $(this).addClass("btn-back-to-top");
      });

    }
  });
});

//Close mobile-menu on click

$(function(){
  $(".navbar-collapse ul li a").on("click touch", function(){
    $(".navbar-toggle").click();
  });
});

// include HTML Snippets

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("content-includer");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("content-includer");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}
