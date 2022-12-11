$(document).ready(function () {

  var list = 0;
  var list2 = 0;
  var list3 = 0;
  var list4 = 0;

  var count = $(".panel1 li").length;
  var count2 = $(".panel2 li").length;
  var count3 = $(".panel3 li").length;
  var count4 = $(".panel4 li").length;

  var autoSlide = setInterval(function(){
    if(list ==count-1){
      list = 0;
    }else{
      list++;
    }
    $(".panel1>li").stop().fadeOut();
    $(".panel1>li").eq(list).stop().fadeIn();
  }, 3000);

  var autoSlide1 = setInterval(function(){
    if(list2 ==count2-1){
      list2 = 0;
    }else{
      list2++;
    }
    $(".panel2>li").stop().fadeOut();
    $(".panel2>li").eq(list).stop().fadeIn();
  }, 3000);

  var autoSlide2 = setInterval(function(){
    if(list3 ==count3-1){
      list3 = 0;
    }else{
      list3++;
    }
    $(".panel3>li").stop().fadeOut();
    $(".panel3>li").eq(list3).stop().fadeIn();
  }, 3000);

  var autoSlide3 = setInterval(function(){
    if(list4 ==count4-1){
      list4 = 0;
    }else{
      list4++;
    }
    $(".panel4>li").stop().fadeOut();
    $(".panel4>li").eq(list4).stop().fadeIn();
  }, 3000);

  $(".li.bars").click(function(){
    $("li.bars ul").css("display:block");
  });
});
