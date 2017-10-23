  g = {}
  $(function(){
    g.lang = document.getElementById("language").getElementsByClassName("active")[0].children[0].innerHTML;
    g.main_options = $(".main-options")[0];
    g.body = $("#content")[0];
    g.option = $(".form-control")[0];
    g.topMenu = $("#main_menue")[0];
    g.count = 0;
    if(g.lang == "EN") {
      setUpConnection('../json/resourcesLayout.json');
      setUpConnection('../json/documents.json');
    } else if (g.lang == "FR") {
      setUpConnection('../json/resourcesLayout-fr.json');
      setUpConnection('../json/documents-fr.json');
    }

    setContent();
  });
  function optionSelect(title) {
    var option = $("<option></option>").attr("value", "#" + title.replace(/ /g, '-')).text(title);
    $(g.option).append(option);
  }
  function showPdfs(e) {
    g.a = this.id

    for (var key in g.inclass) {
      if(this.id == g.inclass[key].title) {
        $(g.main_options).addClass("hidden");
        $(g.topMenu).addClass("hidden");
        setDocs(g.inclass[key].title, g.inclass[key].documents);
        break;
      }
    }
  }
  function setDocs(header, arrayOfDocs) {
  setDocHeader(header);
  var ul = $("<ul></ul>").addClass('list-group margin-custom-30');
    for (var key in arrayOfDocs) {
      var li = $("<li></li>").addClass('list-group-item');
      var row = $("<div></div>").addClass('row');
      //make col 8 and col 4
      g.a[key] = arrayOfDocs[key];
      makeRows(row, arrayOfDocs[key]);
      $(li).append(row);
      $(ul).append(li);
    }
    $(g.docContainer).append(ul);
  }
  function makeRows(row, doc) {
    //col 8
    var col8 = $("<div></div>").addClass('col-xs-8');
    var docTitle = $("<h4></h4>").addClass('text-heavy').text(doc.title);
    var description = $("<p></p>").text(doc.description);
    $(col8).append(docTitle);
    $(col8).append(description);
    $(row).append(col8);
    //col 4
    var pptxClass = doc.link.substring(doc.link.lastIndexOf('.') + 1) == "pptx" ? "resources_link" : "";
    console.log(doc.link.substring(doc.link.lastIndexOf('.') + 1));
    var col4 = $("<div></div>").addClass('col-xs-4');
    var link = $("<a></a>").addClass('pull-right text-blue ' + pptxClass).attr("target", "_blank");;
    var linkIcon = $("<span></span>").addClass('glyphicon glyphicon-download icon');

    $(link).attr("href", doc.link);
    $(link).append(linkIcon);
    $(col4).append(link);
    $(row).append(col4);
  }
  function setDocHeader(header) {
    g.docContainer = $("<div></div>").addClass("container padding-top-large");
    var title = $("<h2></h2>").addClass('text-center text-orange text-capitalize').text(header);
    g.backButton = $("<a></a>").addClass("btn btn-blue pull-left back");
    var span = $("<span></span>").addClass("glyphicon glyphicon-arrow-left").text(' Back');
      $(g.backButton).append(span);
      $(title).append(g.backButton);
      $(g.docContainer).append(title);
      $(g.body).append(g.docContainer);
      $(g.backButton).on('click', backToMenue);
  }
  function backToMenue() {
    $(g.docContainer).remove();
    $(g.topMenu).removeClass("hidden");
    $(g.main_options).removeClass("hidden");
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
        $(title).attr("id", g.response[key].title.replace(/ /g, '-'));
        optionSelect(g.response[key].title);
        if(g.response[key].subsection != "") {
          placeSubSections(key, title);
          $(section).append(title);
          $(g.main_options).append(section);
        } else {
          $(section).append(title);
          g.x = g.response[key].block;
          placeBlocks(g.response[key].block, section, g.response[key].blockName);
          $(g.main_options).append(section);
        }
      }//end of if
    }// end of for each
    g.imgBlocks = $('.img');
  }
  function placeSubSections(key, title, index) {
    var subsection = g.response[key].subsection;
    var subContainer = $("<div></div>").addClass('row row-centered');
    for (var i = 0; i < g.response[key].subsection.length; i++) {
      var subTitle = $("<h4></h4>").addClass('text-blue text-center padding-bot-small padding-top-small').text(g.response[key].subsection[i])
      $(subContainer).append(subTitle);
      placeBlocks(g.response[key].block[g.response[key].subsection[i]], subContainer, g.response[key].block.blockName);
    }
    $(title).append(subContainer);
  }
  function placeBlocks(block, container, blockName) {
    for (var i = 0; i < block.length; i++) {
      var section = $("<div></div>").addClass('col-md-3 col-sm-12 col-centered');
      var image = $("<img>").addClass("img img-responsive cursor-pointer img-third");
      $(image).attr("src", block[i]);
      $(image).attr("id", blockName[i]);
      $(section).append(image);
      $(container).append(section);
      $(image).on('click', showPdfs);
    }
  }
