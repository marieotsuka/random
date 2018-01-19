
$(document).ready( function(){

	function generatePalette() {
		for(var i=0; i<4; i++) {
			palette[i] = getRandomColor();
		}
	}

	generatePalette();
	$('.graphic').css('background', 'linear-gradient('+palette[0]+','+palette[1]+')');

	for(var i=0; i<40; i++) {
		$('.graphic').append('<div class="shape"></div>');
	}

	for(var i=0; i<3; i++) {
	 	$('.shape').append('<div class="shape inside"></div>')
	 }
	
	$('.shape').each(function (index) {
		var rand = palette[Math.floor(Math.random() * palette.length)];
		var shapeWidth = getRandomNumber(0,200);
		var shapeHeight = shapeWidth;
		var deltaX = getRandomNumber(-300,300);
		var deltaY = getRandomNumber(-300,300);

		$(this).css({
			'background': rand,
			'height': shapeHeight+'px',
			'width': shapeWidth+'px',
			'transform': 'translateX('+ deltaX + 'px) translateY(' + deltaY + 'px)',
		});

	});

});



