$(document).ready(function(){

  $(".nav_main").click(function(){
    $(this).next(".answer").slideToggle();
    $(this).next(".answer").siblings(".answer").stop().slideUp();

    $(this).addClass("on").siblings().removeClass("on");
  });

// 배너 슬라이드 제품 상세
  $(".plus_btn").mouseenter(function(){
    $(this).siblings().stop().animate({"opacity":"1"});
  });

  $(".plus_btn").mouseleave(function(){
    $(this).siblings().stop().animate({"opacity":"0"});
  });

  // 배너 슬라이드

  var i = $(".indicator li.on").index();
  var count = $(".main .visual").length;

  $(".indicator li").click(function(){
    i = $(this).index();

    $(".indicator li").removeClass("on");
    $(".indicator li").eq(i).addClass("on");
    $(".main .visual").stop().fadeOut(500);
    $(".main .visual").eq(i).stop().fadeIn(600);
  });

// 메인 슬라이드 auto

  var visualAutoSlide = setInterval(function(){
    if(i == count-1){
      i = 0;
    }else{
      i = i + 1;
    }
    autoFade();
  },4000);

// 메인 슬라이드 정지
$(".visual").mouseenter(function(){
  clearInterval(visualAutoSlide);
});

// 메인 슬라이드 재생
$(".visual").mouseleave(function(){
  visualAutoSlide = setInterval(function(){
    if(i == count-1){
      i = 0;
    }else{
      i = i + 1;
    }
    autoFade();
  },4000);
});

// 슬라이드 auto 재생 호출함수
  function autoFade(){
    $(".indicator li").removeClass("on");
    $(".indicator li").eq(i).addClass("on");
    $(".main .visual").stop().fadeOut(500);
    $(".main .visual").eq(i).stop().fadeIn(600);
  };
});