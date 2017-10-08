var g = {
    months: {
        december: [],
        november: [],
        october: [],
        september: [],
        august: [],
        july: [],
        june: [],
        may: [],
        april: [],
        march: [],
        february: [],
        january: []
    }
};

$(document).ready(function() {
    readfile('news.json');
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

function error(jqXHR, textStatus, errorThrown) {
    console.log(textStatus);
}

function success(data, status, xhr) {
    $.each(data, function(i, news) {
        var title = '', imgPath = '', 
            location = '', date = '',
            details = '', images = [];

        if (news.date) {
            date = news.date;

            dateArr = splitDate(news.date);
            
            for(var key in g.months) {
                if(key === dateArr['month'].toLowerCase().trim()) {
                    if (news.title) 
                        title = news.title;
            
                    if (news.imageHeader) 
                        imgPath = news.imageHeader;
            
                    if (news.location)
                        location = news.location;
                    
                    if (news.details);
                        details = news.details;

                    g.months[key].push(createNewRow(imgPath, title, location, date, details));
                }
            }
        }
    });

    displayNews();
}

function displayNews() {
    for(var month in g.months) {
        if(g.months[month].length !== 0) {            
            var $month = $('<h3 class="text-black text-uppercase">' + month + '</h3>');
            $('.news').append($month).append(g.months[month]);
        }
    }
}

function splitDate(date) {
    var date = date.split('-');

    var dateArr = [];
    dateArr['day'] = date[0];
    dateArr['month'] = date[1];
    dateArr['year'] = date[2];

    return dateArr;
}

function createNewRow(imgPath, title, location, date, details) {
    var dateArr = splitDate(date);

    // var $lineBreak = $('<hr/>');

    var $img = $('<img src="' + imgPath + '" class="img img-responsive" alt="">');        
    var $imgDiv = $('<div class="col-sm-2 padding-small"></div>').append($img); 

    var $link = $('<a href="newsDetail.html?d=' + encodeURIComponent(details) + '"></a>' );
    var $title = $('<h4 class="text-blue">' + title + '</h4>');    
    $link.append($title);

    var $location = $('<span>' + location + '</span>');
    var $date = $('<span> - ' + dateArr['month'] + ' ' + dateArr['year'] + '</span>');

    var $linkDiv = $('<div class="col-sm-10"></div>').append($link);
    $linkDiv.append($location).append($date);

    var $row = $('<div class="row border-top padding-small"></div>');
    $row.append($imgDiv).append($linkDiv);

    return $row;
}