$(window).scroll(function(){var $heightScrolled = $(window).scrollTop();
    var $defaultHeight = 250;
    if($heightScrolled < $defaultHeight){
        $('#head_top').removeClass("sticky");
        $('.main_nav').css("width","58%");
        $('a').css("color","white");
        $('#logo').attr("src","img/logo-white.png");
        $('.float').css('visibility','hidden')
        $('.float').css('bottom','-40px');

    }
    else{
        $('#head_top').addClass("sticky");
        $('.main_nav').css("width","75%");
        $('a').css("color","black");
        $('#logo').attr("src","img/logo.png");
        $('.float').css('visibility','visible');
        $('.float').css('bottom','40px');

    }
});

// ===============> mouse move
$('#log' ).on( "mousemove", function( event ) {
    console.log( "pageX: " + event.pageX + ", pageY: " + event.pageY );
    if (event.pageX>850){
        $('.text_box_img').css('right','150px');
        $('.text_box').css('left','60px');
    }
    else if(event.pageX<100){
        $('.text_box_img').css('right','70px');
        $('.text_box').css('left','120px');
    }
    else {
        $('.text_box_img').css('right','100px');
        $('.text_box').css('left','100px');
    }
    if(event.pageY<170){
        $('.text_box_img').css('top','240px');
        $('.text_box').css('top','210px');
    }
    else if(event.pageY>410){
        $('.text_box_img').css('top','180px');
        $('.text_box').css('top','160px');
    }
    else{
        $('.text_box_img').css('top','210px');
        $('.text_box').css('top','180px');
    }
});

//==============================> slider
var x =0;
$('.next').click(function () {
    if(x<2) {
        $('.back').css('cursor','pointer');
        var l = $('.holder').css('left');
        l = parseInt(l.replace(/px/, '')) + 500;
        $('.holder').css('left', l + 'px');
        x++;
        console.log(x);

    }
    else {
        $('.next').css('cursor','not-allowed');
    }

});

$('.back').click(function () {
    var l =$('.holder').css('left');
    if(x>0){
        $('.next').css('cursor','pointer');
        l=parseInt(l.replace(/px/,''))-500;
        $('.holder').css('left',l+'px');
        x--;
        console.log(x);

    }
    else {
        $('.back').css('cursor','not-allowed');
    }
});



 var w =  $( ".tabs" ).find( ".mamad" ).length;
//
//     $( ".tabs" ).find( ".mamad" ).click(function () {
//         for(var x=0 ; x<w ; x++){
//             $( ".container" ).find( ".jodaSazi" ).eq(x).removeClass("active");
//
//         }
//         console.log($(this).parents('.container').find('.jodaSazi').eq());
//
//
//     });
var save = 0;
$('.tabs .mamad').click(function() {
    var index =  $( ".tabs" ).find( ".mamad" ).index($(this));
    console.log(index);
    for(var x=0 ; x<w ; x++){
             $( ".container" ).find( ".jodaSazi" ).eq(x).removeClass("activeBala");
             $( ".container" ).find( ".jodaSazi" ).eq(x).removeClass("activePaein");
             $( ".tabs" ).find( ".mamad" ).eq(x).removeClass("act");
    }
    $(".tabs").find(".mamad").eq(index).addClass("act");
    if(save >index) {
        $(".container").find(".jodaSazi").eq(index).addClass("activeBala");
    }
    else {
        $(".container").find(".jodaSazi").eq(index).addClass("activePaein");
    }
    save = index ;
});