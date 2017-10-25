  g = {}
  $(function(){
    $(window).scrollTop(0);
    g.lang = document.getElementById("language").getElementsByClassName("active")[0].children[0].innerHTML;
    g.main_options = $(".main-options")[0];
    g.body = $("#content")[0];
    g.option = $(".form-control")[0];
    g.topMenu = $("#main_menue")[0];
    g.count = 0;
    //determine if the site is in french or english
    if(g.lang == "EN") {
      setUpConnection('../json/resourcesLayout.json');
      setUpConnection('../json/documents.json');
    } else if (g.lang == "FR") {
      setUpConnection('../json/resourcesLayout-fr.json');
      setUpConnection('../json/documents-fr.json');
    }
    setContent();
  });
  /**
  * Creates a single options tag tiw the text being passed into
  * the function.
  */
  function optionSelect(title) {
    var option = $("<option></option>").attr("value", "#" + title.replace(/ /g, '-')).text(title);
    $(g.option).append(option);
  }
  /**
  * Hides the main menue as well as the text above.
  * Will call setDocs function in order to diplay the correct
  * documents the if stament will compare the id of the selected item
  * to each title property within the documents.json file.
  */
  function showPdfs(e) {
    //will scroll the window to the top of the page.
    $(window).scrollTop(0);
    for (var key in g.inclass) {
      //compares the selected items id to the current title being iterated through.
      if(this.id == g.inclass[key].title) {
        $(g.main_options).addClass("hidden");
        $(g.topMenu).addClass("hidden");
        //if there is a subtitle it is assigned else an empty string is assigned.
        var subTitle = g.inclass[key].subTitle ? g.inclass[key].subTitle : "";
        //the title, an array of documents and the subtitle is passed into the setDocs function.
        setDocs(g.inclass[key].title, g.inclass[key].documents, subTitle);
        //the doc was found and a break is added to save processing.
        break;
      }
    }//end of for loop
    //once the docs are set the path of power point docs must be adjusted.
    pathAdjust();
  }
  /**
  * Creates the list of docs, creating the tags and appending them
  * acordingly.
  */
  function setDocs(header, arrayOfDocs, subTitle) {
  setDocHeader(header, subTitle);
  var ul = $("<ul></ul>").addClass('list-group margin-custom-30');
    for (var key in arrayOfDocs) {
      var li = $("<li></li>").addClass('list-group-item');
      var row = $("<div></div>").addClass('row');
      //make col 8 and col 4
      makeRows(row, arrayOfDocs[key]);
      $(li).append(row);
      $(ul).append(li);
    }
    $(g.docContainer).append(ul);
  }
  /**
  * Creates a single row outof the document property being passed in.
  * the row is the container where the row will be appended onto.
  */
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
    var col4 = $("<div></div>").addClass('col-xs-4');
    var link = $("<a></a>").addClass('pull-right text-blue ' + pptxClass).attr("target", "_blank");;
    var linkIcon = $("<span></span>").addClass('glyphicon glyphicon-download icon');

    $(link).attr("href", doc.link);
    $(link).append(linkIcon);
    $(col4).append(link);
    $(row).append(col4);
  }
  function setDocHeader(header, subTitle) {
    g.docContainer = $("<div></div>").addClass("container padding-top-large");
    var title = $("<h2></h2>").addClass('text-center text-orange text-capitalize').text(header);
    g.backButton = $("<a></a>").addClass("btn btn-blue pull-left back");
    var span = $("<span></span>").addClass("glyphicon glyphicon-arrow-left").text(' Back');
      $(g.backButton).append(span);
      $(title).append(g.backButton);
      checkSubtitle(subTitle, title);
      $(g.docContainer).append(title);
      $(g.body).append(g.docContainer);
      $(g.backButton).on('click', backToMenue);
  }
  function checkSubtitle(subTitle, title) {
    if(subTitle != "") {

      var start = subTitle[0].substring(0, subTitle[0].indexOf(subTitle[1]));
      var end = subTitle[0].substring(subTitle[0].indexOf(subTitle[1]) + subTitle[1].length + 1);
      var link = subTitle[1];

      var a = $("<a></a>").addClass('text-blue').text(link).attr('href', subTitle[2]);
      var sub = $("<h4></h4>").addClass('text-center text-capitalize text-black padding-bot').text(start);
      $(sub).append(a);
      var sub2 = $("<h4></h4>").addClass('text-center text-capitalize text-black padding-bot').text(end);
      $(sub).append(sub2);
      $(title).append(sub);
    }
  }
  function backToMenue() {
    $(window).scrollTop(0);
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

  function pathAdjust() {
    g.links = $('.resources_link');
    /* only if the current station the user is using is a mac
    will this boolean be true */
   if (window.navigator.platform.substring(0,3).toLowerCase() === "mac") {
        set_path();
    }
  }
  /*
   * changes the href of all the a tags with the class (resources_link)
   * Moreover this function will only be called if the user is using a mac
   * therefor the path to the files must be changed in order to redirect the user to
   * the file that can run on his/her system.
   */
  function set_path() {
    g.temp = [];
    /* a tag was causing issues and was not allowing the (.replace()) function to switch
    *  the word windows to mac within the path there for the long way had to be taken. using
    *  string manipulation the desire result achived.
    */
    for (var i = 0; i < g.links.length; i++) {
      g.temp[i] = g.links[i].href.substring(0 , g.links[i].href.indexOf('windows')) + "mac" +
        g.links[i].href.substring(g.links[i].href.indexOf('windows') + 'windows'.length);
      $(g.links[i]).removeAttr("href");
    }
    /*
     *  once the path is corrected the href is re-assigned onto the a tag
    */
    for (var i = 0; i < g.links.length; i++) {
      g.links[i].href = g.temp[i]
    }
  }
