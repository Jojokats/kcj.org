g = {}
$(function(){
  g.main_options = $(".main-options")[0];
  g.body = $(".main-display")[0];
  g.count = 0;
  setUpConnection('resources.json');
  setUpConnection('inclass.json');
});
function showPdfs(e) {
  g.e = e;
//  $(g.body).addClass("hidden");
//  g.e = g.e.target.src.substr(g.e.target.src.lastIndexOf('/')+1);
  if(g.response.section1.title) {

  }
}
function setUpConnection(file) {
  g.file = g.requestLanguage = U.createRequestObject();
  g.file.onreadystatechange = chkResponse;
  g.file.open("GET", file, false);
  g.file.send(null);
}
function chkResponse(){
	if (g.file.readyState === 4 && g.file.status === 200) {
    setVariables(JSON.parse(g.file.responseText));
    setContent();
	}
}
function setVariables(response) {
  g.response = g.count == 0 ?  response : g.response;
  g.inclass = g.count == 1 ?  response : g.inclass;
  g.count++;
}
function setContent() {
  for (var key in g.response) {
    if (g.response.hasOwnProperty(key)) {
      var section = $("<div></div>").addClass('container-fluid border-top row-centered padding-bot-medium');
      var title = $("<h3></h3>").addClass('text-orange text-uppercase text-center padding-bot-small').text(g.response[key].title);
      if(g.response[key].subsection != "") {
        placeSubSections(key, title);
        $(section).append(title);
        $(g.main_options).append(section);
      } else {
        $(section).append(title);
        placeBlocks(g.response[key].block, section);
        $(g.main_options).append(section);
      }
    }//end of if
  }// end of for each
}
function placeSubSections(key, title) {
  var subsection = g.response[key].subsection;
  var sucContainer = $("<div></div>").addClass('row row-centered');
  for (var i = 0; i < g.response[key].subsection.length; i++) {
    var subTitle = $("<h4></h4>").addClass('text-blue text-center padding-bot-small padding-top-small').text(g.response[key].subsection[i])
    $(sucContainer).append(subTitle);

    placeBlocks(g.response[key].block[g.response[key].subsection[i]], sucContainer);
  }
  $(title).append(sucContainer);
}
function placeBlocks(block, container) {
  for (var i = 0; i < block.length; i++) {
    var section = $("<div></div>").addClass('col-md-3 col-sm-12 col-centered');
    var image = $("<img>").addClass("img img-responsive cursor-pointer img-third");
    $(image).attr("src", block[i]);
    $(section).append(image);
    $(container).append(section);
    $(image).on('click', showPdfs);
  }
}
