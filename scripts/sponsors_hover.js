$(function(){
  $('#partnersSponsors img').hover(function(){
    hover(this, true);
  });
  $('#partnersSponsors img').mouseout(function(){
    hover(this, false);
  });
});

function hover(img, hovered){
  var src = img.src.split('/');
  var sponsor = src[src.length - 1];
  sponsor = sponsor.substr(0, sponsor.indexOf('-'));

  var path = '';
  for(var i=0; i<src.length - 1; i++){
    path += src[i] + '/';
  }

  if(hovered){
    img.src = path + sponsor + '-Colour.png';
  } else {
    img.src = path + sponsor + '-Grey.png';
  }
}
