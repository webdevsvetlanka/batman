$(document).ready(function() {
	let menuItem = $('.full-info__menu-item');
	
	menuItem.on('click', function(e) {
		e.preventDefault();

		let activeContent = $(this).attr('href');
		$('.visible').toggleClass('visible');
		$(activeContent).toggleClass('visible');
		$('.menu-item-active').toggleClass('menu-item-active');
		$(this).toggleClass('menu-item-active');
	});
});