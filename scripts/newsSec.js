var g = {
    isEnglish: true,
    newsPath: 'news/',
    imgPath: '',
    numImage: 6   
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
 * Get the json file from the url can call success or error method
 * @param {String} url 
 */
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
        if (i < g.numImage) {
            var imageThumbnail = news.imageThumbnail;

            if (imageThumbnail) {
                appendToNewsSec(createImgBlock(g.imgPath + imageThumbnail, news.details, news.title));
            }
        }
    });
}

/**
 * Append the block to the div with the id=newsSec
 * @param {JQuery} $imageBlock  
 */
function appendToNewsSec($imgBlock) {    
    console.log("append to news section");
    $('#newsSec').append($imgBlock);
}

/**
 * Create a div that has an image in the a tag. This will link to its
 * news detail page.
 * @param {String} imgPath 
 * @param {String} detail 
 */
function createImgBlock(imgPath, detail, title) {
  var alt = imgPath.substr(imgPath.lastIndexOf('/') + 1);
  var $img = $('<img src="' + imgPath + '" alt="' + alt + '"class="img img-responsive margin-auto border-radius"/>');

  var $riser = $('<div class="overlay"</div>');
  $riser.append($('<div class="text">'+ title +'</div>'));

  var $link = $('<a href="newsDetail.html?d=' + detail+ '"></a>')
  $link.append($img).append($riser);

  var $div = $('<div class="col-xs-4 padding-small trigger"></div>');
  $div.append($link);

  return $div;
}