$(function(){
      // Scroll down
  $(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    e.preventDefault();

    var pos = $id.offset().top - 80;
    $('body, html').animate({scrollTop: pos}, 1000);
  });
});