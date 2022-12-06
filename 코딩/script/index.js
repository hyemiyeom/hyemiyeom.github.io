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

    // banner slide------------------------------------------------
    var autoSlide = setInterval(function(){
        $(".banner").stop().animate({"margin-left":"-3840px"},1000,function(){
            $(".banner>li").first().appendTo(".banner");
            $(".banner").css({"margin-left":"-1920px"});
            
        });
    },5000);

    // 환율 slide------------------------------------------------
    var autoSlide0 = setInterval(function(){
        $(".ex_list").stop().animate({"margin-top":"-60px"},500,function(){
            $(".ex_list>li").first().appendTo(".ex_list");
            $(".ex_list").css({"margin-top":"-30px"});
            
        });
    },3000);

    // Steady, Real 화살표------------------------------------------------
    $(".steady_prev").click(function(){
        $(".steady").stop().animate({"margin-left":"0px"},function(){
            $(".steady").css({"margin-left":"-375px"});
            $(".steady>li").last().prependTo(".steady");
        });  
    });
    $(".steady_next").click(function(){
        $(".steady").stop().animate({"margin-left":"-750px"},function(){
            $(".steady").css({"margin-left":"-375px"});
            $(".steady>li").first().appendTo(".steady");
        });
    });
    $(".real_prev").click(function(){
        $(".real").stop().animate({"margin-left":"0px"},function(){
            $(".real").css({"margin-left":"-375px"});
            $(".real>li").last().prependTo(".real");
        });  
    });
    $(".real_next").click(function(){
        $(".real").stop().animate({"margin-left":"-750px"},function(){
            $(".real").css({"margin-left":"-375px"});
            $(".real>li").first().appendTo(".real");
        });
    });
    
    // Steady, Real slide------------------------------------------------
    var autoSlide1 = setInterval(function(){
        $(".steady").stop().animate({"margin-left":"-750px"},function(){
            $(".steady").css({"margin-left":"-375px"});
            $(".steady>li").first().appendTo(".steady");
        });
    },3000);
    var autoSlide2 = setInterval(function(){
        $(".real").stop().animate({"margin-left":"-750px"},function(){
            $(".real").css({"margin-left":"-375px"});
            $(".real>li").first().appendTo(".real");
        });
    },3000);

    $(".steady_view").mouseenter(function(){
        clearInterval(autoSlide1);
    });
    $(".real_view").mouseenter(function(){
        clearInterval(autoSlide2);
    });

    $(".steady_view").mouseleave(function(){
        autoSlide1 = setInterval(function(){
            $(".steady").stop().animate({"margin-left":"-750px"},function(){
                $(".steady").css({"margin-left":"-375px"});
                $(".steady>li").first().appendTo(".steady");
            });
        },3000);
    });
    $(".real_view").mouseleave(function(){
        autoSlide2 = setInterval(function(){
            $(".real").stop().animate({"margin-left":"-750px"},function(){
                $(".real").css({"margin-left":"-375px"});
                $(".real>li").first().appendTo(".real");
            });
        },3000);
    });

    $(window).scroll(function(){
        if($(this).scrollTop() > 2600){
            $(".main_vlog").stop().fadeIn().animate({"left":"0px","opacity":"1"},300);
            $(".slide1").stop().fadeIn(100).animate({"right":"0px","opacity":"1"},200,function(){
                $(".slide2").stop().fadeIn(100).animate({"right":"0px","opacity":"1"},200,function(){
                    $(".slide3").stop().fadeIn(100).animate({"right":"0px","opacity":"1"},200);
                });
            });
        }else{
            $(".main_vlog").stop().fadeOut().animate({"left":"-500px","opacity":"0"},300);
            $(".slide1").stop().fadeOut(100).animate({"right":"-500px","opacity":"0"},200,function(){
                $(".slide2").stop().fadeOut(100).animate({"right":"-500px","opacity":"0"},200,function(){
                    $(".slide3").stop().fadeOut(100).animate({"right":"-500px","opacity":"0"},200);
                });
            });
        }
    });

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
    }, 1500);






});