window.FF_OnAfterSave = function() {
    $.cookie('formCompleted', true, { expire: 365, path: '/'});
    location = 'resources.html';  
}
