$(document).ready(init);

function init(){
    //console.log(init);
    var bandera=$("#bandera");
    var codigopais=$("#codigopais");
    
    var banderaC= localStorage.getItem('src');
    var codeC = localStorage.getItem('codigo');
    
    bandera.attr({'src':banderaC});
    //bandera.attr(banderaC);
    codigopais.text(codeC);
}








function myFunction() {
    var x = Math.floor((Math.random() * 1000) + 1);
    alert( "Tu codigo es LAB : " +  x);
}






































/*function init()
{
    var button =document.getElementById("button");
    button.addEventListener("clic",OnButtonClick)
}

function OnButtonClick(){
    var input=document.getElementById("");
    localStorage.getItem("nombre",input.value);
    alert(olii);
}*/
