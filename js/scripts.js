$(window).scroll(function() {
  parallax();
})

function parallax() {
  var wScroll= $(window).scrollTop(); //storing how far from top to

  $('.slide1').css('background-position', 'center ' + (wScroll*0.75) + 'px')
  $('#logo').css('transform', )

}

function rando() {
  var randyrandom = randint(2000, 10000)
  console.log("rando is running " + randyrandom);
  setTimeout(function(){$( ".glitch-box" ).addClass( "glitch2" );setTimeout(function(){$( ".glitch-box" ).removeClass( "glitch2" )}, 200);rando()}, randyrandom)
  console.log("glitch is supposed to be here");


}

$('.glitch').hover(function() {
  $(this).addClass('glitch');
}, function() {
  $(this).removeClass('glitch');
});

$(document).ready(function(){
rando()
})
//
function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


// $(function() {
//     var glitchbox = $(".glitch-box");
//     var glitchboxTop = glitchbox.offset().top;
//     var windowHeight = $(window).height();

//     $(window).scroll(function() {
//         var scroll = $(window).scrollTop();
//
//         // let's fire up animation when .box is in view
//
//         if ( scroll >= ( glitchboxTop - windowHeight )) {
//             glitchbox.addClass(".glitch2");
//         }
//     });
// });
