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
   












})