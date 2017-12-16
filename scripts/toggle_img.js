g = {};
$(function() {
  $('.donate-img-hover').hover(function() {
    hover(this, true);
  });
  $('.donate-img-hover').mouseout(function() {
    hover(this, false);
  });
  function hover(img, check) {
    console.log(img.src);
    g.t = img;
      if(check) {
          img.src = img.src.substring(0, img.src.indexOf('.svg')) + "_Hover.svg";
      } else {
        img.src = img.src.substring(0, img.src.indexOf('_Hover')) + ".svg";
      }
  }
});
