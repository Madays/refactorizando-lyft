$(document).ready(function(){
   init() ;
});
/*
{"estimado":{"min":3.3,"max":11.3,"moneda":"$"},
 "final":7,
 "conductor":{"name":"Maricela Darwinowa",
              "url":"https:\/\/0.academia-photos.com\/34959676\/10181871\/11362172\/s200_maricela.alvarez_drobush.jpg"}
}
*/
function init(){  
    $.ajax({
        url: 'https://clientes.geekadvice.pe/api/carrera',data:{"tipo":4}, success: function(_data){
            var dataServer = _data;
            console.log(dataServer.final);
            $('#img-driver').attr('src',dataServer.conductor.url);
            $('#price').text(dataServer.final);
    }});
       
}
    

