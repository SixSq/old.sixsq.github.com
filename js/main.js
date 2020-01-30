
$(document).ready(function(){
	"use strict";

	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".header-welcome").height(),
	header_height 		 = $(".header-std").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;
	
	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);


  //-------- Active Sticky Js ----------//
   $(".header-welcome").sticky({topSpacing:0});
   $(".header-std").sticky({topSpacing:0});

	 //------- Add smooth scrolling to all links
     //---- Toggle Menu Bar

        // $('.toggle-btn').on('click', function(e){
        //     e.preventDefault();
        //     $('body').toggleClass('overflow-hidden');
        //     $('.side-menubar').toggleClass('open-menubar');
        //     $("span", this).toggleClass("lnr-menu lnr-cross");
        //
        // });
        // $('.side-menubar nav ul li a').on('click', function(e){
        //     e.preventDefault();
        //     $('.side-menubar').toggleClass('open-menubar');
        //     $(".toggle-btn span").toggleClass("lnr-menu lnr-cross");
        //     $('body').removeClass('overflow-hidden');
        // });

         // Add smooth scrolling to Menu links
      //          $(".main-menu nav ul li a, .side-menubar nav ul li a").on('click', function(event) {
      //             if (this.hash !== "") {
      //               event.preventDefault();
      //               var hash = this.hash;
      //               $('html, body').animate({
      //                 scrollTop: $(hash).offset().top - (-10)
      //             }, 600, function(){
      //
      //                 window.location.hash = hash;
      //             });
      //     }
      // });
      //
      //           $(".main-menu nav ul li a").on('click', function (e) {
      //             $(".main-menu nav ul li").removeClass("active");
      //             $(this).addClass("active");
      //         });

         $(window).on('scroll', function(event){
             var scrollPos = $(document).scrollTop();
             $(".main-menu nav ul li a, .side-menubar nav ul li a").each(function () {
               var currLink = $(this);
               var refElement = $(currLink.attr("href"));

               if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                 currLink.parent().addClass("active").siblings().removeClass("active"); 
                 return;
             }
             else{
                 currLink.parent().removeClass("active");
             }
         })
         })

        
    //-------- 02 home slider Carousel -------//

    $('.slider-carousel').owlCarousel({
        loop: true,
        dots: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        animateOut: 'fadeOutRight'
    })
     //-------- home news Carousel Active section top -------//

    $('.news-homepage-carousel').owlCarousel({
        loop: true,
        dots: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        animateOut: 'fadeOutRight'
    })
    //-------- News Carousel Active section -------//

    $('.active-screen-news').owlCarousel({
        loop: false,
        items: 1,
        dots: false,
		    responsiveClass: true,
        nav: true,
        autoHeight: true,
        loop: false,
        navText: [
          "<i class='fa fa-chevron-left'></i>",
			    "<i class='fa fa-chevron-right'></i>"
        ],
			 	loop:true,
			 	responsiveClass:true,
			 	responsive:{
			 	0:{
          items:1
			}
    }

    })
    //-------- product page Carousel -------//

    $('.product-page-carousel').owlCarousel({
        loop: true,
        dots: true,
        items: 3,
        center: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        animateOut: 'fadeOutRight',
        responsiveClass:true,
	 	responsive:{
	        0:{
	            items:1,
	            nav:false,
	        },
	        600:{
	            items:2,
	        },
	        1000:{
	            items:3,
	        },
    	}	 	
    })

    
    //-------- button scroll to top -------//
    
	$('#to-the-top').click(function(e) { 
		e.preventDefault(); $('body,html').animate({scrollTop: 0}, 500); 
	});
	
});
	
(function($) {
    var element = $('#social'),
        originalY = element.offset().top;

    // Space between element and top of screen (when scrolling)
    var topMargin = 20;

    // Should probably be set in CSS; but here just for emphasis
    

    $(window).on('scroll', function(event) {
        var scrollTop = $(window).scrollTop();

        element.stop(false, false).animate({
            top: scrollTop < originalY
                    ? 500
                    : scrollTop + originalY + topMargin
        }, 400);
    });
})(jQuery);
	

