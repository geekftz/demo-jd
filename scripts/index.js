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
        $('.gps-choice').css('backgroundColor','#fff');
        $('.gps-choice').css('border-left','.5px solid lightgray');
        $('.gps-choice').css('border-right','.5px solid lightgray');
        $('.gps>li').css('display','block');
    },function(){
        $('.gps').css('backgroundColor','rgb(227,228,229)');
        $('.gps-choice').css('backgroundColor','rgb(227,228,229)');
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
            $(this).css('color','gray');
            $(this).css('backgroundColor','');
    })
   












})