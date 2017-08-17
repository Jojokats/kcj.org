window.CodeClubWorld = {};
g = {};
$(function() {
  g.lang = document.getElementById("language").getElementsByClassName("active")[0].children[0].innerHTML;
  g.path = g.lang == "EN" ? "img/" : "../img/"
  // TODO: add your API key
  CodeClubWorld.api_token = 'ROe90450b2a7fd5fefdaa57c51aead395927510b4ea7b133fe0f298747cc50d8aa';

  // TODO: add your Country Code here
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
//  console.log("makeMap called");
  var el = document.getElementById('map');
  //console.log(el);
  if (!el) return;

  $.ajax({
    method      : 'GET',
    url         : CodeClubWorld.api + '/clubs?in_country=' + CodeClubWorld.country_code,
    contentType : 'application/json',
    headers     : { 'Authorization': 'Bearer ' + CodeClubWorld.api_token, 'Accept': 'application/vnd.codeclubworld.v'+CodeClubWorld.api_version }
  })
  .done( function(data) {
    var starting_point = {lat:  45.50884, lng: -73.58781};
    var clubs = data, lat, lng, dataZ, LatLng
        markers = [];
        g.makers = markers;

   g.more = clubs;
    if(CodeClubWorld.region){
      lat = parseInt(CodeClubWorld.region.options[CodeClubWorld.region.selectedIndex].getAttribute("data-lat"));
      lng = parseInt(CodeClubWorld.region.options[CodeClubWorld.region.selectedIndex].getAttribute("data-lng"));
      dataZ = parseInt(CodeClubWorld.region.options[CodeClubWorld.region.selectedIndex].getAttribute("data-z"));
      LatLng = new google.maps.LatLng(lat, lng);
    } else {
      dataZ = 4;
      LatLng = new google.maps.LatLng(52.0, -95.5);
    }

//    console.log(LatLng.toString());
    var map = new google.maps.Map(el, {
      center: LatLng,
      scrollwheel: false,
      center: starting_point,
      zoom: 4,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

  //  console.log(LatLng.toString());
//    console.log(data);
    $.each(clubs, function(i, club) {
      var address = club.venue.address;
      if (!address) return;

      var lat = address.latitude,
          lng = address.longitude;

      if (lat === null || lng === null) return;

      var latLng = new google.maps.LatLng(lat, lng);
          marker = new google.maps.Marker({
            position: latLng,
            icon: g.path + 'marker.png'
          });
      markers.push(marker);

    });//end of each

    g.kidscode = [{lat: 50.454705, lng: -72.228515, contact:"1"}, {lat: 55.946738, lng: -114.284184, contact:"2"},
                  {lat: 57.725272, lng:	-125.138676, contact:"3"},{lat: 51.615287, lng: -87.433593, contact:"4"}];
    $.each(g.kidscode, function(i, club){

      var latLng = {lat:  g.kidscode[i].lat, lng: g.kidscode[i].lng};
          marker = new google.maps.Marker({
            position: latLng,
            icon: g.path + 'marker_blue.png',
          });
      markers.push(marker);
      g.makers.push(marker);
      google.maps.event.addListener(marker, 'click', function() {
        console.log("clicked");
        var infobox = g.infobox;
        g.infobox.close();
        var content = [];
        if (club.contact){
          content.push('<h5 class="text-green text-uppercase">' + club.contact  +'</h5>');
        }
        content = content.join('');
        infobox.setContent(content);
        infobox.open(map, this);
      });
    });


    $('.counter').replaceWith(clubs.length);
    // TODO: I've commented out the styles section to make
    // this work in jsbin. Leave the styles section of the
    // mcOptions "as is"
    var mcOptions = {
      gridSize: 30,
      imagePath: g.path + 'm'
    };
   var markerCluster = new MarkerClusterer(map, markers, mcOptions);

  });
};
