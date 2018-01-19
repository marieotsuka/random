
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

var color;

function getRandomColor() {
    color = '#';
    var letters = '0123456789ABCDEF'.split('');
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var palette = [];

$(document).ready(function(){
    var pageRefresh = setTimeout(function(){
          window.location.reload(1);
    }, 2000);

    $('body').keydown(function(e) {
       if(e.keyCode == 32){
          clearTimeout(pageRefresh);
      }
    });

});


