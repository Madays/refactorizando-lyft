function initMap() {
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
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: myLatLng.lat, lng: myLatLng.lon},
    zoom: 8
  });
    
    // Create a marker and set its position.
    var marker = new google.maps.Marker({
        map: map,
        position: {lat: myLatLng.lat, lng: myLatLng.lon},
        title: 'Hello World!',
        icon:"img/car.png"
    });
    
    var myLatLng1 = [
      {lat: -12.1511485, lng: -70.531948},{lat: -15.4521485, lng: -73.532948},{lat: -15.4521485, lng: -71.532948}];
    //{lat: -15.4521485, lng: -71.532948},{lat: -16.4531485, lng: -74.533948},{lat: -15.4541485, lng: -73.534948},{lat: -16.4571485, lng: -71.532948}
    for(var i=0;i<=myLatLng1.length;i++){
        var marker1 = new google.maps.Marker({
          map: map,
          position: myLatLng1[i],            
          title: 'Hello World!',
          icon:"img/car.png"
        });    
    }    
}

var car = [{"srcImg":"img/car.png",
            "typeCar":"Line",
            "seats":"Shared 2 riders max",
            "standbyTime":"3",
            "unitTime":"min"},
           {"srcImg":"img/car22.png",
            "typeCar":"Lyft",
            "seats":"4 seats",
            "standbyTime":"3",
            "unitTime":"min"},
           {"srcImg":"img/car32.png",
            "typeCar":"Plus",
            "seats":"6 seats",
            "standbyTime":4,
            "unitTime":"min"},
           {"srcImg":"img/car42.png",
            "typeCar":"Premier",
            "seats":"High-end, 4 seats",
            "standbyTime":"3",
            "unitTime":"min"}
           ];
$('#yourPosition').click(function(){ 
        $('#cars').html('');
        for(var i=0;i<=car.length;i++){        
        $('ul').append('<li class="clearfix liCar">'+
                    '<img src="'+car[i].srcImg+'" alt="" style="float:left;padding: 20px 0px;" class="text-center">'+            
                    '<div style="float:left;padding: 0px 10px;">'+
                        '<span>'+car[i].typeCar+'</span>'+
                        '<br>'+
                        '<span>'+car[i].seats+'</span>'+
                    '</div>' +
                    '<div style="float:right;padding: 0 10px;" class="text-center">'+
                        '<span>'+car[i].standbyTime+'</span>'+
                        '<br>'+
                        '<span>'+car[i].unitTime+'</span>'+
                    '</div>'+                
            '</li>'); 
    }    
});

$("ul").on("click","li",selectCar);
function selectCar(){
    $("ul").html('');
}

/*Almacenar la eleccion de carro*/
$('#cars').on("click",".liCar",function(event){
    console.log(event.currentTarget.children[1].lastChild.textContent);
    localStorage.setItem('imgCar',event.currentTarget.children[0].src);    localStorage.setItem('typeCar',event.currentTarget.children[1].firstChild.textContent);    localStorage.setItem('seats',event.currentTarget.children[1].lastChild.textContent);
    
});