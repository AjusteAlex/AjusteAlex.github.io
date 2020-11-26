

document.querySelector('.closebtn').addEventListener('click', function(){
  document.querySelector(".main-menu").style.right = "-100%";
});
document.querySelector('.openbtn').addEventListener('click', function(){
  document.querySelector(".main-menu").style.right = "0";
});



// https://bootsnipp.com/snippets/kl8Q3
// http://jsfiddle.net/4xSe4/5/

$(window).scroll(function() {    
  var scroll = $(window).scrollTop();
  if (scroll != 0) {
      $(".main-menu").addClass("scrolling").css('transition', '0.5s');
  } else {
      $(".main-menu").removeClass("scrolling");
  } 
});
















