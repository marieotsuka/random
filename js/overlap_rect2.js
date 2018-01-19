
$(document).ready( function(){

	function generatePalette() {
		for(var i=0; i<3; i++) {
			palette[i] = getRandomColor();
		}
	}

	generatePalette();
	$('.graphic').css('background', 'linear-gradient(-45deg,'+palette[0]+','+palette[1]+')');

	for(var i=0; i<20; i++) {
		$('.graphic').append('<div class="shape"></div>');
	}

	for(var i=0; i<2; i++) {
	 	$('.shape').append('<div class="shape inside"></div>')
	 }
	
	$('.shape').each(function (index) {
		var rand = palette[Math.floor(Math.random() * palette.length)];
		var shapeWidth = getRandomNumber(0,100);
		var shapeHeight = getRandomNumber(0,600);
		var deltaX = getRandomNumber(-300,300);
		var deltaY = getRandomNumber(-300,300);
		var rotate = getRandomNumber(0,180);
		$(this).css({
			'background': rand,
			'height': shapeHeight+'px',
			'width': shapeWidth+'px',
			'transform': 'translateY(' + deltaY + 'px)'
		});
	});

});



