
$( window ).resize(function() {
  if ($(window).width() > 992) {
  	var x = $(this).width()/12;
  	var error = x/300;
    $(".logo-box, .box1").height(2*x);
    $(".logo-box").css({ top: x });
    $(".connector1 img, .connector2 img, .connector3 img, .box-download").height(x);
    $(".connector1 img").css({ top: 6*x });
    $(".connector2 img").css({ top: 10*x });
    $(".connector3 img").css({ top: 14*x });
    $(".box1").css({ top: 4*x });
    $(" .box2, .box3").height(3*x);
    $(".box2").css({ top: x*7 });
    $(".box3").css({ top: x*11 - x*11/300});
    $(".box-download").css({ top: 15*x });
  }
});
 if ($(window).width() > 992) {
  var x = $(window).width()/12;
  var error = x/300;
  $(".logo-box, .box1").height(x*2);
  $(".logo-box").css({ top: x - error});
  $(".box1").css({ top: x*4 -error*4});
  $(".logo-box, .box1").css({ position: 'absolute' })
  $(".box2, .box3").height(x*3);
  $(".box2").css({ top: x*7 - error*7});
  $(".box3").css({ top: x*11 - error*11 });
  $(".box2, .box3").css({ position: 'absolute' })
  $(".connector1 img, .connector2 img, .connector3 img").height(x);
  $(".connector1 img, .connector2 img, .connector3 img, .box-download").css({ position: 'absolute' })
  $(".connector1 img").css({ top: 6*x - error*6});
  $(".connector2 img").css({ top: 10*x - error*10});
  $(".connector3 img").css({ top: 14*x - error*14});
  $(".box-download").css({ top: 15*x - error*15});
}

