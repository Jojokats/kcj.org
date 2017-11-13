var g = {
    isEnglish: true,
    newsPath: 'news/',
    imgPath: '',
    years : []    
};

$(document).ready(function() {
    if($('#language .active').text() === 'EN'){
        g.newsPath += 'news-en.json';
      } else {
        g.isEnglish = false;
        g.imgPath = '../';
        g.newsPath = g.imgPath + 'news/news-fr.json';
      }
    readfile(g.newsPath);
});

/**
 * Get the name of the month base of the month number
 * @param {int} monthNum 
 */
function translateMonthToFrench(month) {

    switch(month) {
        case 'january':
            return 'janvier';
        case 'february':
            return 'février';
        case 'march':
            return 'mars';
        case 'april':
            return 'avril';
        case 'may':
            return 'mai';
        case 'june':
            return 'juin';
        case 'july':
            return 'juillet';
        case 'august':
            return 'août';
        case 'september':
            return 'septembre';
        case 'october':
            return 'octobre';
        case 'november':
            return 'novembre';
        case 'december':
            return 'decembre';
    }
    return 'Cant translate to french : ' + month;
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

/**
 * Compare between two date, the latest date is bigger than
 * the ealier date.
 * @param {String} first - first date
 * @param {String} second - second date
 */
function compareDateDsc(first, second) {
    var firstDate = new Date(first.date);
    var secondDate = new Date(second.date);

    return secondDate - firstDate;
}

function success(data, status, xhr) {
    var allNews = data;

    allNews.sort(compareDateDsc);

    $.each(allNews, function(i, news) {
        if (news.date) {
            date = news.date;
            dateArr = splitDate(date);

            var year = dateArr['year'];
            
            if(getIndexOfYears(year) === -1) {
                g.years.push(createYearObj(year));
                appendMonth(news, g.years[getIndexOfYears(year)].months);
            } else {
                appendMonth(news, g.years[getIndexOfYears(year)].months);
            }
        }
    });

    displayNews();
}

/**
 * Find the index of g.years object that match the year in the parameter
 * @param {Int} year 
 */
function getIndexOfYears(year) {
    console.log(year);
    for(var i=0; i<g.years.length; i++) {
        if(year === g.years[i].year) {
            return i;
        }
    }
    return -1;
}

/**
 * Create a year object which has 12 months.
 * @param {int} year 
 */
function createYearObj(year) {
    var yearWrapper = {
        year: year,
        months : {
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
    }

    return yearWrapper;
}
/**
 * Display the news under the month category
 */
function appendMonth(news, months) {
    console.log('appendMonth()');
    var title = '', imgPath = '', 
    location = '', date = '',
    details = '', images = [];

    if(news.date) {
        date = news.date;
        var dateArr = splitDate(date);
        for(var month in months) {
            if(month === dateArr['month'].toLowerCase().trim()) {
                if (news.title) 
                    title = news.title;
        
                if (news.imageThumbnail) 
                    imgPath = g.imgPath + news.imageThumbnail;
        
                if (news.location)
                    location = news.location;
                
                if (news.details);
                    details = news.details;
    
                console.log("imgPath : " + imgPath);
                months[month].push(createNewsRow(imgPath, title, location, date, details));
            }
        } 
    }

}

/**
 * Get an associative array of the month string that has '-' has a separator
 * @param {String} date 
 */
function splitDate(dateStr) {
    var date = dateStr.split('-');

    var dateArr = [];
    dateArr['day'] = date[0];
    dateArr['month'] = date[1];
    dateArr['year'] = date[2];

    return dateArr;
}

function displayNews() {
    var $allNews = $('#allNews');
    for(var key in g.years) {
        var year = g.years[key].year;
        var months = g.years[key].months;

        var $year = $('<div class="' + year + '"></div>');
        $year.append(createYear(year)).append(createMonths(months));
        
        $allNews.append($year);
    }
}

function createYear(year) {
    var $year = $('<div class="row"><h1 class="text-orange">' + year +'</h1></div>');
    return $year;
}

/**
 * Create all months divs and push to the news class
 * @param {Array} months 
 */
function createMonths(months) {
    var $news = $('<div class="news"></div>');;

    for(var month in months) {
        if(months[month].length > 0) {
            console.log(months[month].length);
            console.log(month);
            var monthStr = month;
            if(!g.isEnglish)
                monthStr = translateMonthToFrench(month);

            var $month = $('<h3 class="text-black text-uppercase">' + monthStr + '</h3>');
            $news.append($month).append(months[month]);
        }
    }
    return $news;
}

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
    var month = dateArr['month'].toLowerCase();
    if(!g.isEnglish)
        month = translateMonthToFrench(month);

    // var $lineBreak = $('<hr/>');

    var $img = $('<img src="' + imgPath + '" class="img img-responsive" alt="">');        
    var $imgDiv = $('<div class="col-sm-2 padding-small"></div>').append($img); 

    var $link = $('<a href="newsDetail.html?d=' + encodeURIComponent(details) + '"></a>' );
    var $title = $('<h4 class="text-blue">' + title + '</h4>');    
    $link.append($title);

    var $location = $('<span>' + location + '</span>');
    var $date = $('<span class="text-capitalize"> - ' + month + ' ' + dateArr['year'] + '</span>');

    var $linkDiv = $('<div class="col-sm-10"></div>').append($link);
    $linkDiv.append($location).append($date);

    var $row = $('<div class="row border-top padding-small"></div>');
    $row.append($imgDiv).append($linkDiv);

    return $row;
}