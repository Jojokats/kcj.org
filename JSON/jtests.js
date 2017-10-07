g = {}
$(function(){

    setUpConnection();
    setEventListners();

});
function setUpConnection() {
  g.file = g.requestLanguage = createRequestObject();
  g.file.onreadystatechange = chkResponse;
  g.file.open("GET", "resources.json", true);
  g.file.send(null);
}
function chkResponse(){;
	if (g.file.readyState === 4 && g.file.status === 200) {
  //  console.log("server responded with: " + g.file.responseText);
		g.response = JSON.parse(g.file.responseText);
	}
}
function createRequestObject() {
  var request;
  if (window.XMLHttpRequest) {
		request = new XMLHttpRequest();
  } else {
		request = new ActiveXObject("Microsoft.XMLHTTP");
  }
  return request;
}
function setEventListners() {
  g.md = $(".main-display")[0];
  g.img = $(".img").click(function a() {
      g.key = this.id.split("-");

    //  g.title = g.response[g.key[0]][g.key[1]][g.key[2]].header;
      var group = g.key[1];
      var field = g.key[2];
      g.md.className = 'hidden';
      //makeHeader();
       var t = $("<h1 class='text-center text-orange text-capitalize'></h1>")
       .text(g.title);
       $("#content").append(t);

  });
}
