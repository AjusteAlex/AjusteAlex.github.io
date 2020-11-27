
// ajout background menu lors du scroll
document.querySelector('.closebtn').addEventListener('click', function(){
  document.querySelector(".main-menu").style.right = "-100%";
});
document.querySelector('.openbtn').addEventListener('click', function(){
  document.querySelector(".main-menu").style.right = "0";
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
















