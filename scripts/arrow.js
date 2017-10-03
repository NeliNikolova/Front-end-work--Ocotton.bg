$(window).scroll(function(){
		if ($(this).scrollTop() > 200) {
			$('.arrow').fadeIn();
		} else {
			$('.arrow').fadeOut();
		}
	});
	
	
	$('.arrow').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});