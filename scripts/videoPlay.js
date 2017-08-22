
var g = {};
$(document).ready(function(){
  mobileScreen();

  var playBtn = $('#playBtn');
  playBtn.on('click', playFullVideo);
  playBtn.on('click', removeVideoOverlay);

  g.fullVideo = document.getElementById('fullVideo');
  hide(g.fullVideo, true);

  $(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $id.offset().top - 80;

    // animated top scrolling
    $('body, html').animate({scrollTop: pos}, 1000);
  });

  $(window).on('resize', function() {
    mobileScreen();
  }).trigger('resize');
});

function mobileScreen(){
  var screenWidth = $(window).width();
  if (screenWidth < 1100){
    $('.mobile-hide').hide();
  } else {
    $('.mobile-hide').show();
  }
}

function playFullVideo(){
  hide(g.fullVideo, false);

  var video = g.fullVideo.getElementsByTagName('video')[0];
  // console.log(video);
  video.play();
  video.muted = false;
}

function removeVideoOverlay(){
  var overlays = $('.video-overlay');
  for(var i = 0; i < overlays.length; i++){
    hide(overlays.get(i), true);
  }
}

function hide(element, hide){
  if(hide){
    element.style.display = 'none';
  } else {
    element.style.display = '';
  }
}
