/*function initMap() {
  var myLatLng = [
      {lat: -16.1511485, lng: -71.531948},{lat: -15.4521485, lng: -71.532948},{lat: -16.4531485, lng: -74.533948},{lat: -15.4541485, lng: -73.534948},{lat: -16.4571485, lng: -71.532948}];
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -16.4571485, lng: -71.532948},
    zoom: 8
  });
  // Create a marker and set its position.
    for(var i=0;i<=myLatLng.length;i++){
        var marker = new google.maps.Marker({
          map: map,
          position: myLatLng[i],
          title: 'Hello World!',
          icon:"img/taxi2.png"
        });
    }
    
};*/



/*function initMap() {
  getLocation();            
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    var myLatLng = {lat:position.coords.latitude,lon:position.coords.longitude};
    console.log(myLatLng);
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: myLatLng.lat, lng: myLatLng.lon},
    zoom: 8
  });
    
    // Create a marker and set its position.
    var marker = new google.maps.Marker({
        map: map,
        position: {lat: myLatLng.lat, lng: myLatLng.lon},
        title: 'Hello World!',
        icon:"img/taxi2.png"
    });
}
*/
function initMap() {
    getLocation();    
  /*map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -14.4571485, lng: -61.532948},
    zoom: 8
  });*/
  // Create a marker and set its position.
    /*for(var i=0;i<=myLatLng1.length;i++){
        
    }*/                      
}
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    var myLatLng = {lat:position.coords.latitude,lon:position.coords.longitude};
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: myLatLng.lat, lng: myLatLng.lon},
    zoom: 8
  });
    
    // Create a marker and set its position.
    var marker = new google.maps.Marker({
        map: map,
        position: {lat: myLatLng.lat, lng: myLatLng.lon},
        title: 'Hello World!',
        icon:"img/taxi2.png"
    });
    
    var myLatLng1 = [
      {lat: -12.1511485, lng: -70.531948},{lat: -15.4521485, lng: -71.532948},{lat: -16.4531485, lng: -74.533948},{lat: -15.4541485, lng: -73.534948},{lat: -16.4571485, lng: -71.532948}];
    for(var i=0;i<=myLatLng1.length;i++){
        var marker1 = new google.maps.Marker({
          map: map,
          position: myLatLng1[i],
          title: 'Hello World!',
          icon:"img/taxi2.png"
        });    
    }
}