
var g = {};
$(document).ready(function(){
  var playBtn = $('#playBtn');
  // console.log(playBtn);
  // playBtn.on({
  //   'click': playFullVideo,
  //   'click': removeVideoOverlay,
  //   'click': scrollDown
  // });
  playBtn.on('click', playFullVideo);
  playBtn.on('click', removeVideoOverlay);
  playBtn.on('click', scrollDown);

  g.fullVideo = document.getElementById('fullVideo');
  hide(g.fullVideo, true);
});

function playFullVideo(){
  hide(g.fullVideo, false);

  var video = g.fullVideo.getElementsByTagName('video')[0];
  console.log(video);
  video.play();
  video.muted = false;
}

function removeVideoOverlay(){
  var overlays = $('.video-overlay');
  for(var i = 0; i < overlays.length; i++){
    hide(overlays.get(i), true);
  }
}

function scrollDown(){
  
}


function hide(element, hide){
  if(hide){
    element.style.display = 'none';
  } else {
    element.style.display = '';
  }
}
