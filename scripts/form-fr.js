window.FF_OnAfterSave = function() {
    $.cookie('formCompleted', true);
    location = 'ressources.html';  
}

  