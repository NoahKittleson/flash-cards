$(function() {

  $(".section").click(function(){
    $(this).removeClass("section");
    $(this).dblclick(function(){
      $(this).addClass("section");
    });
  });
});
