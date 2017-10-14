var g = {
    newsPath: 'news/',
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
    orderMonths();
    readfile(g.newsPath + 'news.json');
});

/**
 * Order the g.months according to the current months.
 */
function orderMonths() {
    var date = new Date();
    var currentMonth = date.getMonth();

    var months = [];
    var endMonths = [];
    var startMonth = 1;
    var monthName = getMonthName(currentMonth + startMonth); // getMonth() return 0-11
    for(var month in g.months) {
        if(month === monthName) {
            months.push(month);
            startMonth--;
            monthName = getMonthName(currentMonth + startMonth);
        } else {
            endMonths.push(month);
        }
    }

    endMonths.forEach(function(i) {
        months.push(i);
    });

    g.months = {};
    months.forEach(function(element) {
        g.months[element] = [];
    })
}

/**
 * Get the name of the month base of the month number
 * @param {int} monthNum 
 */
function getMonthName(monthNum) {
    if(!Number.isInteger(monthNum   )) {
        return;
    }

    switch(monthNum) {
        case 1:
            return 'january';
        case 2:
            return 'february';
        case 3:
            return 'march';
        case 4:
            return 'april';
        case 5:
            return 'may';
        case 6:
            return 'june';
        case 7:
            return 'july';
        case 8:
            return 'august';
        case 9:
            return 'september';
        case 10:
            return 'october';
        case 11:
            return 'november';
        case 12:
            return 'december';
    }
    return '';
}

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

            dateArr = splitDate(date);
            
            // createYear(dateArr['year']);

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

                    g.months[key].push(createNewsRow(imgPath, title, location, date, details));
                }
            }
        }
    });

    displayNews();
}

/**
 * Display the news under the month category
 */
function displayNews() {
    for(var month in g.months) {
        if(g.months[month].length !== 0) {            
            var $month = $('<h3 class="text-black text-uppercase">' + month + '</h3>');
            $('.news').append($month).append(g.months[month]);
        }
    }
}

/**
 * Get an associative array of the month string that has '-' has a separator
 * @param {String} date 
 */
function splitDate(date) {
    var date = date.split('-');

    var dateArr = [];
    dateArr['day'] = date[0];
    dateArr['month'] = date[1];
    dateArr['year'] = date[2];

    return dateArr;
}


// function createYear(year) {
//     var $year = $('<div class="row"><h1 class="text-orange">' + year +'</h1></div>');
//     $('.year').append($year);
// }
/**
 * Display the row of the news; image on the left, title on the right with date and
 * location under. Title is an '<a>' that link the newsDetail page which shows its detail.
 * 
 * @param {String} imgPath - 
 * @param {String} title 
 * @param {String} location 
 * @param {String} date 
 * @param {String} details 
 */
function createNewsRow(imgPath, title, location, date, details) {
    var dateArr = splitDate(date);

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