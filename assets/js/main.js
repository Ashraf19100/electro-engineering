$(document).ready(function ($) {
	//meanmenu
	$("#navbar nav").meanmenu();
	  
	  $(".slider-area").owlCarousel({
		autoWidth: false,
		items: 1,
		loop: true,
		nav: false,
		dots: true,
		autoplay: true,
		autoplayTimeout:2000,
		responsive: {
		  0: {
			items: 1,
		  },
		  767: {
			items: 1,
		  },
		  1024: {
			items: 1,
		  },
		},
	  });
	  $(".brand-area").owlCarousel({
		autoWidth: false,
		items: 5,
		loop: true,
		nav: true,
		dots: false,
		autoplay: true,
		autoplayTimeout:1200,
		navText : ["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"],
		mouseDrag: true,
		responsive: {
		  0: {
			items: 1,
		  },
		  767: {
			items: 3,
		  },
		  1024: {
			items: 8,
		  },
		},
	  });
	//jQuery Sticky Area
	  $(".sticky-area").sticky({
		topSpacing: 0,
	  });
      
});
