
// menu mobile
$(document).ready(function () {
  menu = document.querySelector(".main-menu"); // querySelector permet de selectionner la class voulu 
  openbtn = document.querySelector('.openbtn'); 
  closebtn = document.querySelector('.closebtn');

  openbtn.addEventListener('click', function(){ // addEventListener permet d'appeler l'événement (click) spécifié est d'envoyé vers la cible.
    $(".openbtn").css('display', 'none');
    menu.style.right = "0";
  });
  
  closebtn.addEventListener('click', function(){
    $(".openbtn").css('display', 'block');
    menu.style.right = "-100%";
  });
});





// ajout background menu lors du scroll
$(window).scroll(function() {   //L’évènement scroll est émis lorsque l’on fait défiler le document.  
  scroll = $(window).scrollTop(); // scrolltop, nombre de pixel par rapport au haut de la page
  if (scroll != 0) {
      $(".main-menu").addClass("scrolling").css('transition', '0.5s');
  } else {
      $(".main-menu").removeClass("scrolling");
  } 
});


//scroll page
$(document).ready(function() {
  $('.js-scrollTo').on('click', function() { // Au clic sur un élément
    page = $(this).attr('href'); // Page cible
    speed = 750; // Durée de l'animation (en ms)
    $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); 
    return false;
  });
});












