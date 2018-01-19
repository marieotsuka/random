
$(document).ready( function(){

	function generatePalette() {
		for(var i=0; i<5; i++) {
			palette[i] = getRandomColor();
		}
	}

	generatePalette();

	for(var i=0; i<20; i++) {
		$('.graphic').append('<div class="shape"></div>');
	}

	for(var i=0; i<3; i++) {
	 	$('.shape').append('<div class="shape inside"></div>')
	 }
	
	$('.shape').each(function (index) {
		var rand = palette[Math.floor(Math.random() * palette.length)];
		var shapeHeight = getRandomNumber(0,100);
		var shapeWidth = shapeHeight;
		var rotate = getRandomNumber(0,180);

		var deltaX = getRandomNumber(-500,500);
		var deltaY = getRandomNumber(-500,500);
		$(this).css({
			'background': rand,
			'height': shapeHeight+'px',
			'width': shapeWidth+'px',
			'transform': 'rotate('+rotate+'deg) translateX('+ deltaX + 'px) translateY(' + deltaY + 'px)' 
		});
	});

});



