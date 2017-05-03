jQuery(function($) {
                  $(document).ready( function() {
                    //enabling stickUp on the '.navbar-wrapper' class
                    $('#fixed_nav').stickUp({
                      //enabling marginTop with the 'auto' setting 
                      marginTop: 'auto'
                    });
                });
              });
        $(document).ready(function () {
           $("#to_top").hide();
           $(window).scroll(function(){
        if($(window).scrollTop()>100){
        $("#to_top").fadeIn(500); $("#to_top").show().removeClass().addClass("animated slideInUp");

        }else{
        $("#to_top").fadeOut(500);
            $("#to_top").removeClass().addClass("animated hinge");
        }
        });
    $(document).on('click','.scroll[href^="#"]',function(e){
		var id = $(this).attr("href");
		var offset = 0;
		var target = $(id).offset().top - offset;
		$('html, body').animate({
			scrollTop:target
		}, 500);
		
		e.preventDefault();
	});
            $(".hamburger").click(function () {
                $(this).toggleClass("hamburger-x");
//             $("#fixed_nav").find("ul").slideToggle();
                $("#fixed_nav ul").slideToggle();
            });
            $(window).resize(function () {
                var w = $(window).width();
                console.log(w);
                if(w>780){
                    $("#fixed_nav ul").show();
                }else{
                    $("#fixed_nav ul").hide();
                    $(".hamburger").removeClass("hamburger-x");
                }
            });
    $('.page01_slider').bxSlider({
//        mode: 'fade',
        captions: true,
});
    $('.video-slider').bxSlider({
        pagerCustom: '#bx-pager-video',
    });  
    $(".masonry-wall").imagesLoaded(function(){
                $(".masonry-wall").masonry({
                    isFitWidth:true
                });
            });
        });