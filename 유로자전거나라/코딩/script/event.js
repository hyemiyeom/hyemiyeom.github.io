$(document).ready(function(){
  
    // 우측 고정 바------------------------------------------------
    $(window).scroll(function(){
      if($(this).scrollTop() > 1000){
          $(".fix_box").fadeIn();
      }else{
          $(".fix_box").fadeOut(0);
      }
  });
  // TOP버튼------------------------------------------------
  $(".top_bt").click(function(){
      $('html,body').stop().animate({
          scrollTop : 0
      }, 400);
      return false;
  });


  // gnb js------------------------------------------------
  $(".gnb>li .gray").mouseenter(function(){
      $(".bg_gray").stop().animate({"height":"65px"},300);
  });
  $(".gnb").mouseleave(function(){
      $(".bg_gray").stop().animate({"height":"0px"},300);
  });
  $(".gnb>li .blank").mouseenter(function(){
      $(".bg_gray").stop().animate({"height":"0px"},200);
  });

  $(".gnb>li").mouseenter(function(){
      $(this).find(".tour").stop().slideDown(250);
  });
  $(".gnb>li").mouseleave(function(){
      $(this).find(".tour").stop().slideUp(250);
  });

  $(".tour>li").mouseenter(function(){
      $(this).find(".con").stop().slideDown(200);
  });
  $(".tour>li").mouseleave(function(){
      $(".bg_gray").stop().animate({"height":"65px"}),200;
      $(this).find(".con").stop().slideUp(200);
  });
  $(".gnb>li:first-child .tour>li").mouseenter(function(){
      $(".bg_gray").stop().animate({"height":"200px"},200);
  });

// ---------- 전 오픈이벤트 

  $(".event_list > li").mouseenter(function(){
    $(this).find(".over_box").stop().fadeIn(500);
    
    $(this).find(".top").stop().animate({"width":"100%"},300);
    $(this).find(".right").stop().animate({"height":"100%"},300);
    $(this).find(".bottom").stop().animate({"width":"100%"},300);
    $(this).find(".left").stop().animate({"height":"100%"},300);
  });

  // 종료이벤트
  $(".endevent_list > li").mouseenter(function(){
    $(this).find(".over_box.end").stop().fadeIn(300);
  });

// 더보기 버튼
$(".more").click(function(){
  $(".endevent_box").stop().slideDown();
});

$(".more").click(function(){
  $(".endevent_box").stop().slideDown();
});


// ---------- 후 
  
  $(".event_list > li").mouseleave(function(){
    $(this).find(".over_box").stop().fadeOut(500);
    $(this).find(".top").stop().animate({"width":"0%"},200);
    $(this).find(".right").stop().animate({"height":"0%"},200);
    $(this).find(".bottom").stop().animate({"width":"0%"},200);
    $(this).find(".left").stop().animate({"height":"0%"},200);
  });

  // 슬라이드 이미지
  
  var i = $(".slide_btn li.now").index();  

  var count = $(".panel li").length; 

  $(".slide_btn li").click(function(){
    i = $(this).index();

    $(".slide_btn li").removeClass("now");
    $(".slide_btn li").eq(i).addClass("now");
    $(".panel li").stop().fadeOut();
    $(".panel li").eq(i).stop().fadeIn();
  });

  $(".next").click(function(){
    if(i == count-1){
      i = 0;
    }else{
      i = i +1;
    }
    $(".slide_btn li").removeClass("now");
    $(".slide_btn li").eq(i).addClass("now");
    $(".panel li").stop().fadeOut();
    $(".panel li").eq(i).stop().fadeIn();
  });

  $(".prev").click(function(){
    if(i == 0){
      i = count-1;
    }else{
      i = i - 1;
    }
    $(".slide_btn li").removeClass("now");
    $(".slide_btn li").eq(i).addClass("now");
    $(".panel li").stop().fadeOut();
    $(".panel li").eq(i).stop().fadeIn();
  });

  var autoSlide = setInterval(function(){
    if(i == count-1){
      i = 0;
    }else{
      i = i +1;
    }
    $(".slide_btn li").removeClass("now");
    $(".slide_btn li").eq(i).addClass("now");
    $(".panel li").stop().fadeOut();
    $(".panel li").eq(i).stop().fadeIn();
  }, 3000);


   // 지점별 긴급연락망

    var i = $(".box_list>li.on").index();

    $(".box_list>li").click(function(e){
      e.preventDefault();
  
      i = $(this).index();
  
      $(".box_list>li").removeClass("on");
      $(".box_list>li").eq(i).addClass("on");
  
      $(".customer_list>li").fadeOut();
      $(".customer_list>li").eq(i).fadeIn();
    });
  
    $(".con1").mouseenter(function(){
      $(".b_up").css({"opacity":1, "width":"100%"});
    });
  
    $(".con1").mouseleave(function(){
      $(".b_up").css({"opacity":0, "width":"0%"});
    });
    
    $(".con2").mouseenter(function(){
      $(".b_down").css({"opacity":1, "width":"100%"});
    });
  
    $(".con2").mouseleave(function(){
      $(".b_down").css({"opacity":0, "width":"0%"});
    });

    
    // ----------공지사항

    var v = $(".page_num li.in").index();
    var count = $(".no_panel p").length;

    $(".right").click(function(){
      if(v == count - 1){
        v = 0;
      }else{
        v++;
      }
      $(".page_num>li").removeClass("in");
      $(".page_num>li").eq(v).addClass("in");
      
      $(".no_panel").eq(0).animate({"margin-top":"-75px"},function(){
        $(".no_panel>p").first().appendTo(".no_panel");
        $(".no_panel").css({"margin-top":"-39px"});
      });
    });
  
    $(".left").click(function(){
      $(".no_panel").eq(0).animate({"margin-top":"0px"},function(){
        $(".no_panel>p").last().prependTo(".no_panel");
        $(".no_panel").css({"margin-top":"-39px"});
      });
    });

    var autoSlide = setInterval(function(){
      if(v == count - 1){
        v = 0;
      }else{
        v++;
      }
      $(".page_num>li").removeClass("in");
      $(".page_num>li").eq(v).addClass("in");
      
      $(".no_panel").eq(0).animate({"margin-top":"-75px"},function(){
        $(".no_panel>p").first().appendTo(".no_panel");
        $(".no_panel").css({"margin-top":"-39px"});
      });
    }, 1600);
});