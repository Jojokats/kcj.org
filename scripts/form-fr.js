window.FF_OnAfterSave = function() {
    $.cookie('formCompleted', true);

    setTimeout(function(){ location = 'ressources.html'; }, 300);
}
