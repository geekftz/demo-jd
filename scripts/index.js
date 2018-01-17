$(document).ready(function(){  
    $('#btn-head').click(function(){
        $("#head-back").fadeOut(500);
    })

    $('#list1>li>h6').mouseover(function(){
        $(this).css('color','red');
        $('.loginOut').css('color','red');
    })
    $('#list1>li>h6').mouseout(function(){
        $(this).css('color','gray');
        $('.loginOut').css('color','red');
    })

    $('.gps-choice,.gps>li').hover(function(){
        $('.gps').css('backgroundColor','#fff');
        $('.gps').css('backgroundColor','rgb(227,228,229)');
        $('.gps-choice').css('background-color','#fff');
        $('.gps-choice').css('border-left','.5px solid lightgray');
        $('.gps-choice').css('border-right','.5px solid lightgray');
        $('.gps>li').css('display','block');
    },function(){
        $('.gps').css('backgroundColor','rgb(227,228,229)');
        $('.gps-choice').css('background-color','rgb(227,228,229)');
        $('.gps-choice').css('border-left','.5px solid transparent');
        $('.gps-choice').css('border-right','.5px solid transparent');
        $('.gps>li').css('display','none');
    })

   

    $('.gps>li>span').hover(function(){
        if($(this).hasClass('active')){
            return false
        }else{
            $(this).css('color','red');
            $(this).css('background-color','aliceblue');
            }
        },function(){
        if(!$(this).hasClass('active')){
            $(this).css('color','gray');
            $(this).css('backgroundColor',''); 
        }
    })

    $('.order-text,.order').hover(function(){
        $('.order').show();
        $('.order-text').css('background-color','#fff');
        $('.order-text').css('border-left','.5px solid lightgray');
        $('.order-text').css('border-right','.5px solid lightgray');
    },function(){
        $('.order').hide();
        $('.order-text').css('border-left','');
        $('.order-text').css('border-right','');
        $('.order-text').css('backgroundColor','rgb(227,228,229)');
    })

    $('.service-text,.service').hover(function(){
        $('.service').show();
        $('.service-text').css('background-color','#fff');
        $('.service-text').css('border-left','.5px solid lightgray');
        $('.service-text').css('border-right','.5px solid lightgray');
    },function(){
        $('.service').hide();
        $('.service-text').css('border-left','');
        $('.service-text').css('border-right','');
        $('.service-text').css('backgroundColor','rgb(227,228,229)');
    })
   
   
    $('.navigate-text,.navigate').hover(function(){
        $('.navigate').show();
        $('.navigate-text').css('background-color','#fff');
        $('.navigate-text').css('border-left','.5px solid lightgray');
        $('.navigate-text').css('border-right','.5px solid lightgray');
    },function(){
        $('.navigate').hide();
        $('.navigate-text').css('border-left','');
        $('.navigate-text').css('border-right','');
        $('.navigate-text').css('backgroundColor','rgb(227,228,229)');
    })

    $('.phone-text,.phone,.ch-qrcode').hover(function(){
        $('.phone').show();
        $('.phone-text').css('background-color','#fff');
        $('.phone-text').css('border-left','.5px solid lightgray');
        $('.phone-text').css('border-right','.5px solid lightgray');
        $('.phone-text').css('cursor','default');
    },function(){
        $('.phone').hide();
        $('.phone-text').css('border-left','');
        $('.phone-text').css('border-right','');
        $('.phone-text').css('backgroundColor','rgb(227,228,229)');
    })

    $('#tabs1').mouseover(function(){
        $('.tabs2-ul').hide();
        $('.tabs1-ul').show();
        if($('#tabs1').hasClass('act')){
            return false;
        }else{
            $('#tabs1').addClass("act");
            $('#tabs2').removeClass("act");
        }
    },function(){
        $('.tabs1-ul').show();
        $('.tabs2-ul').hide();
        $('#tabs1').addClass("act");
        $('#tabs2').removeClass("act");
    })

    $('#tabs2').mouseover(function(){
        $('.tabs1-ul').hide();
        $('.tabs2-ul').show();
        if($('#tabs2').hasClass('act')){
            return false;
        }else{
            $('#tabs2').addClass("act");
            $('#tabs1').removeClass("act");
        }
    },function(){
        $('#tabs2').addClass("act");
        $('#tabs1').removeClass("act");
        $('.tabs2-ul').show();
        $('.tabs1-ul').hide();
    })
   












})