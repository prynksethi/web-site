
$( window ).resize(function() {
  if ($(window).width() > 992) {
  	var x = $(this).width()/12;
  	var error = x/300;
    $(".logo-box, .box1").height(2*x);
    $(".logo-box").css({ top: 0 });
    $(".connector1 img, .connector2 img, .connector3 img, .box-download").height(x);
    $(".connector1 img").css({ top: 5*x });
    $(".connector2 img").css({ top: 9*x });
    $(".connector3 img").css({ top: 13*x });
    $(".box1").css({ top: 3*x });
    $(" .box2, .box3").height(3*x);
    $(".box2").css({ top: x*6 });
    $(".box3").css({ top: x*10 - x*10/300});
    $(".box-download").css({ top: 14*x });
    $(".offering-1, .offering-2, .offering-3, .offering-4").height(3*x);
  }
});
 if ($(window).width() > 992) {
  var x = $(window).width()/12;
  var error = x/300;
  $(".logo-box, .box1").height(x*2);
  $(".logo-box").css({ top: 0});
  $(".box1").css({ top: x*3 -error*3});
  $(".logo-box, .box1").css({ position: 'absolute' })
  $(".box2, .box3").height(x*3);
  $(".box2").css({ top: x*6 - error*6});
  $(".box3").css({ top: x*10 - error*10 });
  $(".box2, .box3").css({ position: 'absolute' })
  $(".connector1 img, .connector2 img, .connector3 img").height(x);
  $(".connector1 img, .connector2 img, .connector3 img, .box-download").css({ position: 'absolute' })
  $(".connector1 img").css({ top: 5*x - error*5});
  $(".connector2 img").css({ top: 9*x - error*9});
  $(".connector3 img").css({ top: 13*x - error*13});
  $(".box-download").css({ top: 14*x - error*14});
  $(".offering-1, .offering-2, .offering-3, .offering-4").height(3*x);
}

