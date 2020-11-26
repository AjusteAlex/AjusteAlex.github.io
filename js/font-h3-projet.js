


function fontResize(This){
  var fontSize = parseInt(This.find("h3").css("font-size"));
  if(This.find("h3").width() > This.find(".titre-projet").width() && fontSize > 1){
    fontSize--;
    This.find("h3").css({"font-size": fontSize+"px"});
    fontResize(This);
  }
}

$(".projet").each(function(){
  fontResize($(this));
});




