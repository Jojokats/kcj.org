var g = {
    path: "./workshop/",
    file: "workshop_en.json",
    type: "Type",
    date: "Workshop date",
    location: "location",
    dir: "en/",
    locale: 'en-ca',
    provinceFile: 'provinces_en.json'
};

$(document).ready(function() {
    if($('#language .active').text() === 'FR') {
        g.path = "../workshop/";
        g.file = "workshop_fr.json";
        g.type = "Type d'atelier",
        g.date = "Date",
        g.location = "Lieu"
        g.dir = "fr/";
        g.locale = 'fr-ca';
        g.provinceFile = 'provinces_fr.json';
    } 
    readfile(g.path + g.file);

    g.$province = $('#province');
    g.$province.on('change', filter);  
    fillProvinces();

    g.$type = $('#type');
    g.$type.on('change', filter);
  
    g.$month = $('#month');
    g.$month.on('change', filter);
  
    g.$notFound = $('#notFound');
});

/**
 * Fill the drop-down list of the province with the province 
 * json file of either English or French
 */
function fillProvinces() {
    $.get(g.path + g.provinceFile, function(data) {
        var options = g.$province.prop('options');
        for(var key in data) {
            options[options.length] = new Option(data[key], key);
        }
    });
}

/**
 * When there is a change event, read the json file and update
 * the view
 */
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
    var title, type, date, location, detail;   

    var $workshopItem = $('#workshop-item');
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
        if (workshop.date.to && currentDate <= new Date(workshop.date.to)) {
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
                        
                    if(isMatchFilter(workshop.location.province, type, workshop.date)) {
                        var workshopSec = createWorkshopSec(title, type, date, location, line);
                        $workshop.append(workshopSec);
                        hide(g.$notFound[0], true);
                    } else {
                        hide(g.$notFound[0], false);
                    }
                });  
            }      
        }
    });

    $workshopItem.replaceWith($workshop);
}

/**
 * Check if the province, type and date match the filter.
 * 
 * @param {String} province 
 * @param {String} type 
 * @param {String} date 
 */
function isMatchFilter(province, type, date) {
    var provinceSelected = g.$province.children()[g.$province.prop('selectedIndex')].value.toUpperCase().trim();
    var typeSelected = g.$type.children()[g.$type.prop('selectedIndex')].value.toUpperCase().trim();
    var monthSelected = g.$month.children()[g.$month.prop('selectedIndex')].value.toUpperCase().trim();
    monthSelected = parseInt(monthSelected);

    province = province.toUpperCase().trim();
    type = type.toUpperCase().trim();

    var from = new Date(date.from).getMonth() + 1;
    var to = new Date(date.to).getMonth() + 1;

    if (provinceSelected !== '' && provinceSelected !== province)
        return false;

    if (typeSelected !== '' && typeSelected !== type)
        return false;
    
    // if the selected month not between date.from and date.to, and is not all,
    // then it doesn't match
    if (monthSelected !== 0 && (monthSelected < from || monthSelected > to))
        return false;

    return true;
}

/**
 * Create a row of a workshop
 * 
 * @param {*} title 
 * @param {*} type 
 * @param {*} date 
 * @param {*} location 
 * @param {*} detail 
 */
function createWorkshopSec(title, type, date, location, detail) {
    var $row = $('<div class="row border-top list-item"></div>');
    var $col = $('<div class="col-xs-12 padding"></div>');
    var head = createWorkshopHead(title, type, date, location);
    var body = createWorkshopDetail(detail);

    $col.append(head).append(body);
    $row.append($col);
    return $row;
}

/**
 * Create a div that contains the top part of each workshop. The top part 
 * has titile, type, date and location. Type, Date and location are changing
 * based on whether English or French.
 * 
 * @param {String} title 
 * @param {String} type 
 * @param {String} date 
 * @param {String} location 
 */
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

/**
 * Create a div that contains the details.
 * 
 * @param {String} details - the body of each workshop section. This is everything
 *                      below location
 */
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
 * Hide or unhide the element
 * 
 * @param {htmlElement} element 
 * @param {Boolean} hide 
 */
function hide(element, hide){
    if(hide){
      element.style.display = 'none';
    } else {
      element.style.display = '';
    }
}