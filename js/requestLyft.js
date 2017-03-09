/*$('#careerCars').click(function(){ 
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
});*/
$(document).ready(function(){
   init() ;
});

function init(){  
    /*
    var lastFlag = document.getElementById('img-flag'); lastFlag.src=localStorage.getItem('flag');
    var codeCountry = document.getElementById('code');    
    codeCountry.textContent=localStorage.getItem('codeCountry'); 
    console.log(codeCountry);
    
    {"estimado":{"min":3.3,
                 "max":11.3,
                 "moneda":"$"},
             "tipo":"1",
             "origen":"ONG Paz Per\u00fa",
             "destino":"Centro hist\u00f3rico"}
    
    */
    /*$.ajax({
        url:'https://clientes.geekadvice.pe/api/estimado',
        data:{"tipo":1}
    }).success(function(_data){
        alert(_data);
    }).error(function(_data){
        
    })*/
    $.ajax({
        url: 'https://clientes.geekadvice.pe/api/estimado',data:{"tipo":4}, success: function(_data){
            var dataServer = _data;
        console.log(dataServer.destino);
            $('#career-price').text(dataServer.estimado.moneda + dataServer.estimado.min+"-"+dataServer.estimado.max);
            $('#origin').text(dataServer.origen);
            $('#destination').text(dataServer.destino);
    }});
    
    console.log(localStorage.getItem('imgCar'));
    $('#imgCar').attr('src',localStorage.getItem('imgCar'));
    $('#typeCar').text(localStorage.getItem('typeCar'));
    $('#seats').text(localStorage.getItem('seats'));    
}
    

