var g = {};
$(document).ready(function() {

  g.in_class = $("#in-class").find("img");
  g.workshop = ($("#workshop").find("img"));
  g.teacher_training = ($("#teacher_training").find("img"));
  g.nav = $("#nav_options")[0];
  g.main = $("#main_menue")[0];
  g.back = $("#back")[0];
  g.pdfs = $("#pdfs")[0];
  g.pdf1 = $("#batch_pdf1")[0];
  g.pdf2 = $("#batch_pdf2")[0];
  g.pdf3 = $("#batch_pdf3")[0];

  $(g.in_class).on( "click", toggle_options);
  $(g.workshop).on( "click", toggle_options);
  $(g.teacher_training).on( "click", toggle_options);

});

function toggle_options(e) {
  g.e = e;
  g.target = e.target.id
  //g.nav[0].children[0]
  switch (g.target) {
    case "intro":
        show_pdfs(e, this, 0, 0);
        break;
    case "scratch":
        show_pdfs(e, this, 0, 1);
        break;
    case "html":
        show_pdfs(e, this, 0, 2);
        break;
    case "python":
        show_pdfs(e, this, 0, 3);
        break;
    case "unplugged":
        show_pdfs(e, this, 0, 4);
        break;
    case "activiies":
        show_pdfs(e, this, 0, 5);
        break;

    case "1_hour_workshop":
        show_pdfs(e, this, 1, 0);
        break;
    case "2_hour_workshop":
        show_pdfs(e, this, 1, 1);
        break;

    case "computational_thinking":
        show_pdfs(e, this, 2, 0);
        break;
    case "computer_programming":
        show_pdfs(e, this, 2, 1);
        break;
    case "internet_web":
        show_pdfs(e, this, 2, 2);
        break;

      }
 $(g.back).on( "click", function() {
   $(g.main).removeClass('hidden');
   $(g.nav).addClass('hidden');
   $(g.nav.children[g.section]).addClass('hidden');
   $(g.current).addClass('hidden');
  });
}
function show_pdfs(e, current, section, option) {
  g.current = g.pdfs.children[section].children[option];
  g.section = section;
  g.option = option;
  $(g.main).addClass('hidden');
  $(g.nav).removeClass('hidden');
  $(g.nav.children[g.section]).removeClass('hidden');
  $(g.current).removeClass('hidden');
  g.options = g.nav.children[g.section].children[1].getElementsByTagName('span');
  $(g.options).on( "click", toggle_nav_options);
}
function toggle_nav_options(e) {
  $(g.current).addClass('hidden');
  $(g.nav.children[g.section]).addClass('hidden');
  g.option = g.section == 0 ? $(this).index() - 1 : $(this).index();
  console.log("g.option: " + g.option);
  g.current = g.pdfs.children[g.section].children[g.option];
  $(g.nav.children[g.section]).removeClass('hidden');
  $(g.current).removeClass('hidden');
}
