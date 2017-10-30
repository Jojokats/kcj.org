
var g = {
    isEnglish: true,
    newsPath: 'news/',
    newsDir: 'news/',
    imgPath: ''
};

$(document).ready(function() {
    if($('#language .active').text() === 'EN'){
        g.newsPath += 'news-en.json';
        g.newsDir += 'en/';
    } else {
        g.isEnglish = false;
        g.imgPath = "../";
        g.newsPath = g.imgPath + 'news/news-fr.json';
        g.newsDir = g.imgPath + 'news/fr/';
    }
    readFile(g.newsPath, 'json', 'GET');    
});

function readFile(url, type, method) {
    $.ajax({
        dataType: type,
        url: url,
        method: method, 
        success: success,
        error: error
    });
}

function error( jqXHR, textStatus, errorThrown) {
    console.log(textStatus);
}

function success(data, status, xhr) {
    // console.log(data);
    $.each(data, function(i, news) {
        // console.log(news.images);
        var title = '', date = '', imgHeader = '',
            details = '', images = [];

        if (news.details);
            details = news.details;

        var d = getUrlVars()['d'];
        // console.log(g.newsDir + d);
        if (d && d === details) {
            
            var $lang = $('#language a');
            // console.log($('#language a'));
            var enLink = $lang.get(0).getAttribute('href') + '?d=' + d;
            var frLink = $lang.get(1).getAttribute('href') + '?d=' + d;

            $lang.get(0).setAttribute('href', enLink);
            $lang.get(1).setAttribute('href', frLink);
            // enLink = enLink.attr('href');
            // enLink += 'd=' + d;
            // console.log(enLink);

            if (news.title) 
                title = news.title;
            
            if (news.date)
                date = news.date;

            if (news.imageHeader)
                imgHeader = g.imgPath + news.imageHeader;

            if (news.images && news.images.length !== 0) 
                images = news.images;

            // console.log("images " + images.length);
            $.get(g.newsDir + d, function(line) {    
                createImageHeader(imgHeader);           
                createNewsSection(images, title, date, line);
            });
        } 
    });
}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

/**
 * Create the img on the top of the newsDetail page. This is the image header.
 * To add Style this img, add the class to img tag below.
 * @param {String} imgPath 
 */
function createImageHeader(imgPath) {
    var $img = $('<img class="img img-responsive margin-auto fillWidth" src="' + imgPath + '" />');
    $('#header').append($img);
}

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

function createNewsSection(images, title, date, body) {
    var date = date.split('-');
    var day = date[0];
    var month = date[1].toLowerCase();
    if(!g.isEnglish)
        month = translateMonthToFrench(month);
    else
        month = month.substr(0, 3);

    var $day = $('<h1 class="text-blue text-bold">' + day + '</h1>');
    var $month = $('<h4 class="text-blue text-uppercase">' + month + '</h4>  ');

    // Create the date on the left side on the news
    var $leftSide = $('<div class="col-xs-2 text-right"></div>'); 
    $leftSide.append($day).append($month);             

    var $title = $('<h3 class="text-orange">' + title + '</h3>');
    // var $body = $('<p class="padding-y-s">' + body + '</p>');
            // $body.append(body);

    // Create the news on the right side of the page
    var $rightSide = $('<div class="col-xs-10 border-left border-lightBlue padding-left-xl"></div>');
    $rightSide.append($title).append(body);

    var $imagesSlide = createImageSlide(images);
    $("#newsInfo").append($leftSide).append($rightSide);
    $("#newsInfo").append($imagesSlide);
    slideImages();
}

function createImageSlide(images) {
    if (!images || images.length === 0)
        return;

    var carouselInner = $('<div class="carousel-inner"></div>');

    for(var i=0; i<images.length; i++) {
        var image = g.imgPath + images[i];
        var img = $('<img class="img img-responsive" src="' + image + '"/>');
        var aTag = $('<a href="' + image + '" data-toggle="lightbox" data-gallery="news-gallery" data-type="image">');
        aTag .append(img);
        
        var imgDiv = $('<div class="col-xs-4 padding-x-s"></div>');
        imgDiv.append(aTag);

        var item;        
        if(i === 0) {
            item = $('<div class="item active"></div>');
        } else {
            item = $('<div class="item"></div>');
        }
        item.append(imgDiv);

        carouselInner.append(item);
    }
    
    var leftArrow = $('<a class="left carousel-control" href="#theCarousel" data-slide="prev"><i class="glyphicon glyphicon-chevron-left"></i></a>');
    var rightArrow = $('<a class="right carousel-control" href="#theCarousel" data-slide="next"><i class="glyphicon glyphicon-chevron-right"></i></a>');
   
   
    var $carouselDiv = $('<div class="col-xs-10 col-xs-offset-1 carousel slide multi-item-carousel padding" id="theCarousel"></div>');
    $carouselDiv.append(carouselInner).append(leftArrow).append(rightArrow);

    return $carouselDiv;
}

function slideImages() {
    $('.multi-item-carousel').carousel({
        interval: 3500
    });
      
    // for every slide in carousel, copy the next slide's item in the slide.
    // Do the same for the next, next item.
    $('.multi-item-carousel .item').each(function(){
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
        
        if (next.next().length>0) {
            next.next().children(':first-child').clone().appendTo($(this));
        } else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
    });

    // to desplay the popup image when click
    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox({
          alwaysShowClose: false,
          showArrows: true
        });
    });
}
