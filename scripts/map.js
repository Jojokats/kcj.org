window.CodeClubWorld = {};
g = {};
$(function() {
  g.lang = document.getElementById("language").getElementsByClassName("active")[0].children[0].innerHTML;
  g.path = g.lang == "EN" ? "img/" : "../img/"
  g.text = g.lang == "EN" ? "Email" : "Courriel"

  CodeClubWorld.api_token = 'ROe90450b2a7fd5fefdaa57c51aead395927510b4ea7b133fe0f298747cc50d8aa';

  CodeClubWorld.country_code = 'CA';

  CodeClubWorld.api = 'https://api.codeclubworld.org';
  CodeClubWorld.api_version = '2';

  CodeClubWorld.makeMap();

  CodeClubWorld.region = document.getElementById('region-search');
  if(CodeClubWorld.region){
    CodeClubWorld.region.onchange = CodeClubWorld.makeMap;
  }
  g.infobox = new google.maps.InfoWindow();

});

CodeClubWorld.makeMap = function() {
  var el = document.getElementById('map');
  if (!el) return;

  $.ajax({
    method      : 'GET',
    url         : CodeClubWorld.api + '/clubs?in_country=' + CodeClubWorld.country_code,
    contentType : 'application/json',
    headers     : { 'Authorization': 'Bearer ' + CodeClubWorld.api_token, 'Accept': 'application/vnd.codeclubworld.v'+CodeClubWorld.api_version }
  })
  /**
  * once the ajax is done
  */
  .done( function(data) {
    var starting_point = {lat:  45.50884, lng: -95.58781};
    var clubs = data, lat, lng, dataZ, LatLng
        markers = [];
    g.makers = markers;

    if(CodeClubWorld.region){
      lat = parseInt(CodeClubWorld.region.options[CodeClubWorld.region.selectedIndex].getAttribute("data-lat"));
      lng = parseInt(CodeClubWorld.region.options[CodeClubWorld.region.selectedIndex].getAttribute("data-lng"));
      dataZ = parseInt(CodeClubWorld.region.options[CodeClubWorld.region.selectedIndex].getAttribute("data-z"));
      LatLng = new google.maps.LatLng(lat, lng);
    } else {
      dataZ = 4;
      LatLng = new google.maps.LatLng(52.0, -95.5);
    }

    var map = new google.maps.Map(el, {
      center: LatLng,
      scrollwheel: false,
      center: starting_point,
      zoom: 4,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    g.icon_cc = {url:g.path + 'CC-Green-Point.png'};
    //  g.icon_cc.setIcon(g.icon_cc);
    $.each(clubs, function(i, club) {
      var address = club.venue.address;
      if (!address) return;

      var lat = address.latitude,
          lng = address.longitude;

      if (lat === null || lng === null) return;

      var latLng = new google.maps.LatLng(lat, lng);
          marker = new google.maps.Marker({
            position: latLng,
            icon: g.icon_cc
          });
      markers.push(marker);
      google.maps.event.addListener(marker, 'click', function() {
        var infobox = g.infobox;
        g.infobox.close();
        var content = [];
        if (club.name){
          content.push('<h5 class="text-green text-uppercase">' + club.name  +'</h5>');
        }

        if (club.venue.address.city) {
          content.push('<p>City: ' + club.venue.address.city + '</p>');
        }

        if (club.venue.address.country) {
          content.push('<p>' + club.venue.address.country.name + '</p>');
        }

        if (club.looking_for_volunteer == true) {
          content.push('<p><span class="glyphicon glyphicon-ok"></span> Looking for volunteers</p>');
          if (club.venue.url) {
            content.push(
              '<a class="d-block padding-xxs" href="' + club.venue.url + '">' +
                club.venue.url +
              '</a>'
            );
          }
          content.push('<a class="btn btn-border-green" href="https://www.codeclub.org.uk/start-a-club/volunteers">Volunteer</a>');
        } else {
          content.push('<p><span class="glyphicon glyphicon-remove"></span> Looking for volunteers</p>');
          if (club.venue.url) {
            content.push(
              '<a class="d-block padding-xxs" href="' + club.venue.url + '" target="_black">' +
                club.venue.url +
              '</a>'
            );
          }
        }
        content = content.join('');
        infobox.setContent(content);
        infobox.open(map, this);
      });

    });//end of each

    g.kidscode = [
      {lat: 50.454705, lng: -72.228515, contact:{title:"Quebec",content:"quebec@kidscodejeunesse.org"}},
      {lat: 55.946738, lng: -114.284184, contact:{title:"Alberta",content:"alberta@kidscodejeunesse.org"}},
      {lat: 57.725272, lng:	-125.138676, contact:{title:"Briish Colombia",content:"bc@kidscodejeunesse.org"}},
      {lat: 51.615287, lng: -87.433593, contact:{title:"Ontario",content:"ontario@kidscodejeunesse.org"}}];
      g.icon_kc = {url:g.path + 'KCJ-Orange-Point.png'};
    $.each(g.kidscode, function(i, club){

      var latLng = {lat:  g.kidscode[i].lat, lng: g.kidscode[i].lng};
          marker = new google.maps.Marker({
            position: latLng,
            icon: g.icon_kc
          });
      markers.push(marker);
      g.makers.push(marker);
      google.maps.event.addListener(marker, 'click', function() {
        var infobox = g.infobox;
        g.infobox.close();
        var content = [];
        if (club.contact){
          content.push('<h5 class="text-orange text-capitalize">' + club.contact.title  +'</h5>');
          content.push("<span class='text-bold'>" + g.text +"  </span>" +
          "<a href='mailto:"+ club.contact.content + "' class='text-capitalize text-blue' target='_blank'>"+ club.contact.content + '</a>');
        }
        content = content.join('');
        infobox.setContent(content);
        infobox.open(map, this);
      });
    });
    $('.counter').replaceWith(clubs.length);
    var mcOptions = {
      gridSize: 30,
      imagePath: g.path + 'm'
    };
   var markerCluster = new MarkerClusterer(map, markers, mcOptions);

  });
};
