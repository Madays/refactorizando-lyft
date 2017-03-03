$(document).ready(init);

function init()
{
    var listaPaises = $("#lista-paises");
    var pais = $.parseJSON(paises);
    
    $.each(pais,function(){
    
    var html='<a href="signup.html"> <li><img class="imagen"  src="'+this['imagen']+'" alt="">'+this['nombre']+'<span class="codigo">'+this['phone_code']+'</span></li></a>';
    
        listaPaises.append(html);
        asignaEventoClick();
});
}
function asignaEventoClick(){
    var lista=$('li');
    $.each(lista,function(){
        $(this).on('click',onClickList)
    }); 
}
function onClickList(evt)
{
    var srcImg=$(evt.currentTarget).find('.imagen').attr('src');
    var code=$(evt.currentTarget).find('.codigo').text();
        
        
    localStorage.setItem('src',srcImg);
     localStorage.setItem('codigo',code);
    
}















