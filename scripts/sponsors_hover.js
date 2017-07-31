$(function(){
  $('#partnersSponsors a').hover(function(){
  //  var orginalSrc = this.firstElementChild.src;
    var src = this.firstElementChild.src.split('/');
    var sponsor = src[src.length - 1];
    sponsor = sponsor.substr(0, sponsor.indexOf('-'));

/*
    for(var i=0; i<src.length - 2; i++){
      src = src[i] + '';
    }*/
    console.log(src);
    //this.firstElementChild.src = src.join('');
  });
});
