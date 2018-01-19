

// var shapeRef = [
//     [x,y],
//     [x,y+h],
//     [x+w,y+h],
//     [x+w,y]
// ];


$(document).ready( function(){

	function generatePalette() {
		for(var i=0; i<5; i++) {
			palette[i] = getRandomColor();
		}
	}

	generatePalette();
	console.log(palette);

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
		var deltaX = getRandomNumber(-500,500);
		var deltaY = getRandomNumber(-300,300);

		var shapeWidth = getRandomNumber(0,100);
		var rotate = getRandomNumber(0,180);
		var border = getRandomNumber(0,100);
		$(this).css({
			'border-color': rand,
			'height': shapeHeight+'px',
			'width': shapeWidth+'px',
			'transform': 'rotate('+rotate+'deg)'
		});
	});

});



