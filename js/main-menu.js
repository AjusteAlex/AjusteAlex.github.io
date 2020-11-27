
// menu mobile
document.querySelector('.closebtn').addEventListener('click', function(){
  document.querySelector(".main-menu").style.right = "-100%";
});
document.querySelector('.openbtn').addEventListener('click', function(){
  document.querySelector(".main-menu").style.right = "0";
});


// ajout background menu lors du scroll
$(window).scroll(function() {    
  var scroll = $(window).scrollTop();
  if (scroll != 0) {
      $(".main-menu").addClass("scrolling").css('transition', '0.5s');
  } else {
      $(".main-menu").removeClass("scrolling");
  } 
});


//scroll page
$(document).ready(function() {
  $('.js-scrollTo').on('click', function() { // Au clic sur un élément
    var page = $(this).attr('href'); // Page cible
    var speed = 750; // Durée de l'animation (en ms)
    $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
    return false;
  });
});












