var g = [];

$(document).ready(function() {

    // var imgPath = 'img\/News_CC_Launch.jpg';
    // var title = 'Kids Code Jeunesse launches Canadian chapter of International network, Code Club';
    // var location = '';
    // var date = '';
    // var detail = 'cc_lauches.txt';

    readfile('news.json');
    // $('.news').append(createNewSection(imgPath, title, location, date, detail));
    
});

function readfile(url) {
    $.ajax({
        dataType: "json",
        url: url,
        method: "GET", 
        success: success,
        error: error
    });
}

function error( jqXHR, textStatus, errorThrown) {
    console.log(textStatus);
}

function success(data, status, xhr) {
    console.log(data);
    $.each(data, function(i, news) {
        var title = '', imgPath = '', 
            location = '', date = '',
            details = '', images = [];
        // console.log(news);
        if (news.title) 
            title = news.title;

        if (news.imageHeader) 
            imgPath = news.imageHeader;

        if (news.location)
            location = news.location;
        
        if (news.date)
            date = news.date;
        
        if (news.details);
            details = news.details;

        console.log(i);
        createNewSection(imgPath, title, location, date, details);
    });
}

function createNewSection(imgPath, title, location, date, details) {
    var $lineBreak = $('<hr/>');

    var $img = $('<img src="' + imgPath + '" class="img img-responsive" alt="">');        
    var $imgDiv = $('<div class="col-sm-2"></div>').append($img); 

    // console.log(encodeURIComponent(details));
    var $link = $('<a href="newsDetail.html?d=' + encodeURIComponent(details) + '"></a>' );
    var $title = $('<h4 class="text-blue">' + title + '</h4>');    
    $link.append($title);
    // var infoDiv = ""

    var $location = $('<span>' + location + '</span>');
    var $date = $('<span> - ' + date + '</span>');

    var $linkDiv = $('<div class="col-sm-10"></div>').append($link);
    $linkDiv.append($location).append($date);

    var $newsDiv = $('.news');
    $newsDiv.append($lineBreak);
    $newsDiv.append($imgDiv);
    $newsDiv.append($linkDiv);

    return $newsDiv;
}