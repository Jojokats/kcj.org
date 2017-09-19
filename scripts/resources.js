var g = {};
$(document).ready(function() {
  /*
  * the following 3 variables will contain all the
  * images that will be clickble on the resources page.
  */
  g.in_class = $("#in-class").find("img");
  g.workshop = ($("#workshop").find("img"));
  g.teacher_training = ($("#teacher-training").find("img"));

  g.main = $("#main_menue")[0]; //this is the original menu the user first sees when resources is loaded
  g.back = $(".back"); //contains all the back buttons on the page.
  g.pdfs = $("#pdfs")[0];//contains the full section with all the sub menues of the each catogory
  g.pdf1 = $("#batch_pdf1")[0]; //first section of pdfs
  g.pdf2 = $("#batch_pdf2")[0]; //second section of pdfs
  g.pdf3 = $("#batch_pdf3")[0]; //three section of pdfs

/*
* the following three event listners are for when the user clicks on one of the images.
*/
  $(g.in_class).on( "click", toggle_options);
  $(g.workshop).on( "click", toggle_options);
  $(g.teacher_training).on( "click", toggle_options);

});
/**
* Toggle through the different sections, the switch statement,
* will check the id of the target click and will send the even
* the this which is the target the rose the event as well of two
* integers that represent there posstion on the original menue.
* For example 0,0 represents inclassroom section and points to the
* intro div of said section.
*/
function toggle_options(e) {
  $(window).scrollTop(0);
  g.target = e.target.id
  switch (g.target) {
    case "intro":
        show_pdfs(e, this, 0, 0);//intro
        break;
    case "scratch":
        show_pdfs(e, this, 0, 1);//scratch
        break;
    case "html":
        show_pdfs(e, this, 0, 2);//html
        break;
    case "python":
        show_pdfs(e, this, 0, 3);//python
        break;
    case "unplugged":
        show_pdfs(e, this, 0, 4);//unplugged
        break;
    case "activiies":
        show_pdfs(e, this, 0, 5);//activity
        break;

    case "2_hour_workshop":
        show_pdfs(e, this, 1, 0);//2-hour
        break;
    case "vibot":
        show_pdfs(e, this, 1, 1);//2-hour
        break;

    case "computational_thinking":
        show_pdfs(e, this, 2, 0);//Computational Thinking
        break;
    case "computer_programming":
        show_pdfs(e, this, 2, 1);//Computer Programming
        break;
    case "internet_web":
        show_pdfs(e, this, 2, 2);//Internet Web
        break;

      }
  //the click event handler for the back button
   $(g.back).on( "click", function() {
     $(window).scrollTop(0);
     $(g.main).removeClass('hidden');
     back_btn("hidden");
     $(g.current).addClass('hidden');
    });
}
/**
* Shows the section of the given section indexes
*/
function show_pdfs(e, current, section, option) {
  g.current = g.pdfs.children[section].children[option];
  g.section = section;
  g.option = option;
  $(g.main).addClass('hidden');
  $(g.current).removeClass('hidden');
  back_btn("show");
}
function back_btn(hs) {
  if (hs == "show") {
    for (var i = 0; i < g.back.length; i++) {
      $(g.back[i]).removeClass('hidden');
    }
  }
  if (hs == "hidden") {
    for (var i = 0; i < g.back.length; i++) {
      $(g.back[i]).addClass('hidden');
    }
  }
}
