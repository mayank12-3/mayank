$(document).ready(function() {
	
	var scrollPageTo = function (e) {
		console.log(e.data.$el.offset().top);
		$('html,body')
			.animate(
				{scrollTop: e.data.$el.offset().top},
        'slow'
		  );
		e.preventDefault();
	}
	
  $(".js-home-btn")
		.on('click',
				{$el : $('.home-wrapper')},
				scrollPageTo
			 );
	
	 $(".js-about-btn")
		.on('click',
				{$el : $('.about-wrapper')},
				scrollPageTo
			 );
	
	 $(".js-portfolio-btn")
		.on('click',
				{$el : $('.portfolio-wrapper')},
				scrollPageTo
			 );
	
	$(".js-contact-btn")
		.on('click',
				{$el : $('.contact-wrapper')},
				scrollPageTo
			 );
});