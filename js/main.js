(function() {
	'use strict'

	var sliderControl = $('.dotstyle li');

	$('.myslider').bxSlider({
		mode: 'vertical',
		slideMargin: 0,
		controls: false,
		pagerCustom: '.dotstyle'
	});

	$(".dotstyle li").hover(function() {
		$('.dotstyle li').removeClass('current');
		$(this).find('a').trigger('click');
		$(this).addClass('current');
	}, function() {});
	
})();