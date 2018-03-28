$(document).ready(function(){
    $("#faRight").on({
    mouseenter: function(){
        $(this).animate({right: '15px'}, "slow");
    },  
    mouseleave: function(){
        $(this).animate({right: '-15px'}, "slow");
    }
    });   
    $("#faLeft").on({
    mouseenter: function(){
        $(this).animate({left: '15px'}, "slow");
    },  
    mouseleave: function(){
        $(this).animate({left: '-15px'}, "slow");
    }
    });  
    
    
    $('.slideshow').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false,
        adaptiveHeight: true
      });
});