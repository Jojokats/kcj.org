var g = {
    path: "./",
    file: "workshop/workshop_en.json",
    type: "Type",
    date: "Workshop date",
    location: "location",
    dir: "workshop/en/",
    locale: 'en-CA'
};

$(document).ready(function() {
    if($('#language .active').text() === 'FR') {
        g.path = "../";
        g.file = "workshop/workshop_fr.json";
        g.type = "Type d'atelier",
        g.date = "Date",
        g.location = "Lieu"
        g.dir = "workshop/fr/";
        g.locale = 'fr-ca';
    } 
    readfile(g.path + g.file);

    g.$province = $('#province');
    g.$province.on('change', filter);
  
    g.$type = $('#type');
    g.$type.on('change', filter);
  
    g.$month = $('#month');
    g.$month.on('change', filter);
  
    g.$notFound = $('#notFound');
});

function filter() {
    readfile(g.path + g.file);
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
    // console.log(provinceSelected);
    var title, type, date, location, detail;   

    var $workshopItem = $('#workshop-item');
    // console.log($workshopItem);
    var $workshop = $('<div id="workshop-item"></div>');
    var allWorkshop = data;

    // Sort by ascending order, earliest date first
    allWorkshop.sort(function(first, second) {
        var firstDate = new Date(first.date.from);
        var secondDate = new Date(second.date.from);
    
        return firstDate - secondDate;
    });

    $.each(allWorkshop, function(i, workshop) {
        var currentDate = new Date();
        if (workshop.date.from && currentDate <= new Date(workshop.date.from)) {
            if(workshop.details) {
                $.get(g.path + g.dir + workshop.details, function(line) {    
                    if(workshop.title)
                        title = workshop.title;
                        
                    if(workshop.type)
                        type = workshop.type;
            
                    if(workshop.date) {
                        var from = new Date(workshop.date.from);
                        var to = new Date(workshop.date.to);
                        var options = { year: 'numeric', month: 'long', day: 'numeric' };
                        date = from.toLocaleDateString(g.locale, options) + ' - ' + to.toLocaleDateString(g.locale, options);
                    }
            
                    if(workshop.location)
                        location = workshop.location.city + ', ' + workshop.location.province;
                        
                    if(isMatchFilter(workshop.location.province, type, workshop.date.from)) {
                        var workshopSec = createWorkshopSec(title, type, date, location, line);
                        $workshop.append(workshopSec);
                        hide(g.$notFound[0], true);
                        // g.$notFound.toggleClass('hidden');
                    } else {
                        hide(g.$notFound[0], false);
                        // g.$notFound.toggleClass('hidden');
                    }
                });  
            }      
        }
    });

    console.log($workshop);  
    $workshopItem.replaceWith($workshop);
}

function isMatchFilter(province, type, date) {
    var provinceSelected = g.$province.children()[g.$province.prop('selectedIndex')].value.toUpperCase().trim();
    var typeSelected = g.$type.children()[g.$type.prop('selectedIndex')].value.toUpperCase().trim();
    var monthSelected = g.$month.children()[g.$month.prop('selectedIndex')].value.toUpperCase().trim();
    monthSelected = parseInt(monthSelected);

    province = province.toUpperCase().trim();
    type = type.toUpperCase().trim();
    var month = new Date(date).getMonth() + 1;

    if (provinceSelected !== '' && provinceSelected !== province)
        return false;

    if (typeSelected !== '' && typeSelected !== type)
        return false;
    
    if (monthSelected !== 0 && monthSelected !== month)
        return false;

    return true;
}

function createWorkshopSec(title, type, date, location, detail) {
    var $row = $('<div class="row border-top list-item"></div>');
    var $col = $('<div class="col-xs-12 padding"></div>');
    var head = createWorkshopHead(title, type, date, location);
    var body = createWorkshopDetail(detail);

    $col.append(head).append(body);
    $row.append($col);
    return $row;
}

function createWorkshopHead(title, type, date, location) {
    var $title = $('<h4 class="text-blue padding-bot-s font-inherit">' + title + '</h4>');
    var $type = $('<h5 class="text-orange font-inherit">' + g.type + ' : <span class="text-black">' + type + '</span></h5>');
    var $date = $('<h5 class="text-orange font-inherit">' + g.date + ' : <span class="text-black">' + date + '</span></h5>');
    var $location = $('<h5 class="text-orange font-inherit">' + g.location + ' : <span class="text-black">' + location + '</span></h5>');
    
    var $div = $('<div></div>');
    $div.append($title);
    $div.append($type);
    $div.append($date);
    $div.append($location);
    return $div;
}

function createWorkshopDetail(details) {
    var $div = $('<div></div>');
    $div.append(details);
    return $div;
}

/**
 * Compare between two date, the earliest date is bigger than
 * the latest date.
 * @param {String} first - first date
 * @param {String} second - second date
 */
function compareDateAsc(first, second) {
    var firstDate = new Date(first.date.from);
    var secondDate = new Date(second.date.from);

    return firstDate - secondDate;
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

function hide(element, hide){
    if(hide){
      element.style.display = 'none';
    } else {
      element.style.display = '';
    }
}