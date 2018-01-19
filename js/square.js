
$(document).ready( function(){

	function generatePalette() {
		for(var i=0; i<5; i++) {
			palette[i] = getRandomColor();
		}
	}

	generatePalette();

	var bgColor = getRandomColor();
	$('.graphic').css('background', bgColor);

	for(var i=0; i<80; i++) {
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
		$(this).css({
			'border-color': bgColor,
			'background': rand,
			'height': shapeHeight+'px',
			'width': shapeWidth+'px',
			'transform': 'rotate('+rotate+'deg)'
		});
	});

});



