window.FF_OnAfterSave = function() {
    $.cookie('formCompleted', true, { expires: 1000, path: '/' });
}
