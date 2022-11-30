$(document).ready(function () {

  var list = 0;
  var list2 = 0;
  var count = $(".panel1 li").length;
  var count2 = $(".panel2 li").length;
  var autoSlide = setInterval(function(){
    if(list ==count-1){
      list = 0;
    }else{
      list++;
    }
    $(".panel1>li").stop().fadeOut();
    $(".panel1>li").eq(list).stop().fadeIn();
  }, 3000);


  var autoSlide = setInterval(function(){
    if(list2 ==count2-1){
      list2 = 0;
    }else{
      list2++;
    }
    $(".panel2>li").stop().fadeOut();
    $(".panel2>li").eq(list).stop().fadeIn();
  }, 3000);


  $(".li.bars").click(function(){
    $("li.bars ul").css("display:block");
  });
});
