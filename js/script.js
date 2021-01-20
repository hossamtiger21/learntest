/*global $ , window, setInterval, clearInterval*/

$(function () {

    'use strict';
        /* Varibles*/
    var myheader = $('.header'),
        
        myslider = $('.bxslider'),
        
        theText = $(".typer").data('text'),
        
        theTextLength = theText.length,
        
        n = 0,
        
        theTyper = setInterval(function () {
            
            $('.typer').each(function () {
               
                $(this).html($(this).html() + theText[n]);
                
            });
            
            n += 1;
            
            if (n >= theTextLength) {
                
                clearInterval(theTyper);
            }
            
        }, 50);
    /*** End Varibles ***/
    
    myheader.height($(window).height());
    
    /*Start Resize Event*/
    $(window).resize(function () {
        
        myheader.height($(window).height());
        
         /*التعديل على كلام داخل الاسلايدر*/
        myslider.each(function () {
        
            $(this).css('marginTop', ($(window).height() - $('.bxslider li').height()) / 2);
        
        });
    });
    /*End Resize Event*/
    
    /*Add Active Class To Link and remove from siblings*/
    $('.links li a').click(function () {
        
        $('.links a').removeClass('active');
        $(this).addClass('active');
        //$(this).addClass("active").parent().siblings().find('a').removeClass("active");
    });
    
    
    /*BX Slider Scripts*/
        /*التعديل على كلام داخل الاسلايدر*/
    myslider.each(function () {
        
        $(this).css('marginTop', ($(window).height() - $('.bxslider li').height()) / 2);
        
    });
    /* Run Slider Script */
    $('.bxslider').bxSlider({
        pager: false
    });
    
    /*************/
    
    /*Smooth Scroll*/
    
    $(".navbar li a").on('click', function (e) {
        
        e.preventDefault();
        
        $('html, body').animate({
    
            scrollTop : $('#' + $(this).data('scrol')).offset().top
            
        }, 600);
    
    });
    
    /*Owen Slider*/
    (function ownSlider() {
        $(".slide .active").each(function () {
            
            if (!$(this).is(':last-child')) {
                
                $(this).delay(2000).fadeOut(500, function () {
                    
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    
                    ownSlider();
                });
            } else {
                
                $(this).delay(2000).fadeOut(500, function () {
                    
                    $(this).removeClass('active');
                    
                    $(".slide div").eq(0).addClass('active').fadeIn();
                    
                    ownSlider();

                });
            }
            
        });
        
    }());

    $('#Container').mixItUp();
    
    $(".project ul li").on("click", function () {
        $(this).addClass("sticked").siblings().removeClass("sticked");
    });
    
    $("html").niceScroll({
        
        cursorcolor: '#fb7960'
    });
});
