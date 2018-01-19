
$(document).ready( function(){

	function generatePalette() {
		for(var i=0; i<4; i++) {
			palette[i] = getRandomColor();
		}
	}

	generatePalette();
	$('.graphic').css('background', 'linear-gradient('+palette[0]+','+palette[1]+')');

	for(var i=0; i<50; i++) {
		$('.graphic').append('<div class="shape"></div>');
	}

	for(var i=0; i<2; i++) {
	 	$('.shape').append('<div class="shape inside"></div>')
	 }
	
	$('.shape').each(function (index) {
		var rand = palette[Math.floor(Math.random() * palette.length)];
		var shapeHeight = getRandomNumber(0,100);
		var shapeWidth = shapeHeight;
		var deltaX = getRandomNumber(-300,300);
		var deltaY = getRandomNumber(-300,300);
		$(this).css({
			'border-color': rand,
			'height': shapeHeight+'px',
			'width': shapeWidth+'px',
			'transform': 'translateX('+ deltaX + 'px) translateY(' + deltaY + 'px)',
		});

	});

});



