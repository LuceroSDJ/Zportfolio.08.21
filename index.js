$(".landingDiv").mouseover(function(){
    $(".landingDiv h1").slideDown("slow");
});
 
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    $(".portrait").css({
      transform: 'translate3d(0, +'+(scroll/100)+'%, 0) scale('+(100 - scroll/40)/75+')'  
    });
    $(".aboutText").fadeIn();

   
  });

  $(".aboutLink").on("click", function() {
    $(".aboutText").fadeIn("slow");
  })


