$(document).ready(function(){
    init();
});
function init(){
    
}
function firstLetterUpperCase(_id){    
    var nombre;
        nombre = $(_id).val();
        var arrayNombre=nombre.split(" ");
        var minusculas=""; var arrayNombre1=[];
        for(var i=0;i<arrayNombre.length;i++){
            minusculas = arrayNombre[i].slice(1);
            arrayNombre[i] = arrayNombre[i][0].toUpperCase()+ minusculas;   
        } 
    arrayNombre = arrayNombre.join(" ");
    
    return $(_id).val(arrayNombre);  
}
function alertMessage(_id,_advice){
    var id = $(_id)[0];
    var idContainer = $(_id).parent().append('<br><span id="alertMessage" >'+_advice+'</span>').css("color","red");   
}
//eliminar adviceMessage
function deleteAlertMessage(_id){
    var id = $(_id);
    id.next().next().remove();
}

var validate = {
    isText:function(_string){
        var regex = /([0-9]+)/;//expresion de numeros del 1 al 9
		return !regex.test(_string);
    },
    isEmail:function(_string){
        var regex = /([a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]+)/g;
        return regex.test(_string);              
    },
}
//Validate name and lastname
$("#nameLastname").keyup(function(){
    var nameLastname = $('#nameLastname').val();    
    if(validate.isText(nameLastname)){
        firstLetterUpperCase('#nameLastname');
        if($('#alertMessage').length>0){ //elimine el mensaje de alerta
            deleteAlertMessage('#nameLastname');  
        }
    }else{
        //alertMessage('#nameLastname','Ingrese su nombre y apellido');
        console.log('number');        
        if($('#alertMessage').length<1){
            alertMessage('#nameLastname','Ingrese su nombre y apellido');
        }        
    }
});
//Validate email  
$('#input-email').keyup(function(){
    var email = $('#input-email');
    if(validate.isEmail(email.val())){
        console.log('correcot');
        if($('#alertMessage').length>0){
            deleteAlertMessage('#input-email');             
        }                                      
    }else{ 
        console.log('incorrecot');
        if($('#alertMessage').length<1){
            alertMessage('#input-email','Ingrese su correo');     
        }               
    }
});
//Save data user

//If sign up is validated pass next page
$('#btn-next-sign-Up').click(validateSignUp);

function validateSignUp() {
    var nameLastname = $('#nameLastname').val();
    var email = $('#input-email').val();
    var checkboxAgree = $('#checkbox-agree');
    if((nameLastname!=='')&&(email!=='')&&(checkboxAgree.prop('checked'))){
        $('#btn-next-sign-Up').attr('href','app.html');
    }
}