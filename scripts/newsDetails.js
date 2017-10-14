
var g = {};

$(document).ready(function() {
    g.newsPath = 'news/';
    readFile(g.newsPath + 'news.json', 'json', 'GET');    
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
        var title = '', date = '', imgHeader = '',
            details = '', images = [];

        if (news.details);
            details = news.details;

        var d = getUrlVars()['d'];
        // console.log(details + " " + d);
        if (d && d === details) {
            // console.log("this is the right one");
            if (news.title) 
                title = news.title;
            
            if (news.date)
                date = news.date;

            if (news.imageHeader)
                imgHeader = news.imageHeader;

            if (news.images && news.images.length !== 0) 
                images = news.images;

            console.log(images);
            $.get(g.newsPath + d, function(line) {    
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

function createImageHeader(imgPath) {
    var $img = $('<img class="img img-responsive max-h-200 margin-auto" src="' + imgPath + '" />');
    $('#header').append($img);
}
function createNewsSection(images, title, date, body) {
    var date = date.split('-');
    var day = date[0];
    var month = date[1].substr(0, 3);

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
        var img = $('<img class="img img-responsive" src="' + images[i] + '"/>');
        var aTag = $('<a href="' + images[i] + '" data-toggle="lightbox" data-gallery="news-gallery" data-type="image">');
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
