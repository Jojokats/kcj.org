var g = {
    isEnglish: true,
    newsPath: 'news/',
    imgPath: '',
    numImage: 4   
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
                appendToNewsSec(createImgBlock(imageThumbnail));
            }
        }
    });

    displayNews();
}

function appendToNewsSec($imgBlock) {
    
    
}

function createImgBlock(imgPath) {
  var alt = imgPath.substr(imgPath.indexOf('/') + 1);
  var $img = $('<img src="' + imgPath + '" alt="' + alt + '"class="img img-responsive"/>');

  var $div = $('<div class="col-xs-6"></div>');
  $div.append($img);

  return $div;
}