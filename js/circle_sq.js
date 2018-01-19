
$(document).ready( function(){

	function generatePalette() {
		for(var i=0; i<4; i++) {
			palette[i] = getRandomColor();
		}
	}

	generatePalette();
	$('.graphic').css('background',palette[0]);
	
	for(var i=0; i<10; i++) {
		$('.graphic').append('<div class="shape"></div>');
	}

	for(var i=0; i<2; i++) {
	 	$('.shape').append('<div class="shape inside"></div>')
	 }
	
	$('.shape').each(function (index) {
		var rand1 = palette[Math.floor(Math.random() * palette.length)];
		var rand2 = palette[Math.floor(Math.random() * palette.length)];
		var shapeWidth = getRandomNumber(0,400);
		var shapeHeight = shapeWidth;
		var deltaX = getRandomNumber(-300,300);
		var deltaY = getRandomNumber(-300,300);

		$(this).css({
			'background': 'linear-gradient('+rand1+','+rand2+')',
			'height': shapeHeight+'px',
			'width': shapeWidth+'px',
			'transform': 'translateX('+ deltaX + 'px) translateY(' + deltaY + 'px)',
		});

	});

});



