/*------Validar formulario----*/
function adviceMessage(_id,_advice){
    var id = $(_id)[0];
    var idContainer = $(_id).parent().append('<br><span id="alertMessage" >'+_advice+'</span>').css("color","#FC1EBE");   
}
//eliminar adviceMessage
function deleteAdviceMessage(_id){
    var id = $(_id);
    id.next().next().remove();
}
//validar nombre, apellido, correo, password
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

function validateName(){    
    var name = $('#nameLastname');    
    if(validate.isText(name.val())){ //Cuando sea texto
        firstLetterUpperCase('#nameLastname');
        if($('#alertMessage').length>0){ //elimine el mensaje de alerta
            deleteAdviceMessage('#nameLastname');  
            name.css('box-shadow','none');
        }
    }else{    
        //NO es nombre crea un mensaje de alerta
        if($('#alertMessage').length<1){
            adviceMessage('#nameLastname','Ingrese su nombre y apellido');
        }                
    }     
}
function validateEmail(){    
    var email = $('#input-email');
    if(validate.isEmail(email.val())){
        if($('#alertMessage').length>0){
            deleteAdviceMessage('#input-email');             
        }                                      
    }else{ 
        if($('#alertMessage').length<1){
            adviceMessage('#input-email','Ingrese su correo');     
        }               
    }       
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

function validateSignUp(){    
    var name = $('#nameLastname'); 
    var email = $('#input-email');
    if(name.val()==""||email.val()==""){
        adviceMessage('#termsLyft','Ingrese sus datos');                     $('form').find('input').css('box-shadow','10px 10px 5px -5px rgba(252, 30, 190,.4)');
    }else{        
        validateName();
        validateEmail();
    }
       
    //pasar al pagina HTML
    if((validate.isEmail(email.val()))&&(validate.isText(name.val()))&&($('#checkbox-agree').is(':checked'))){
        $('#btn-next-sign-Up').attr('href','app.html');
    }    
    saveSignUpData();
}

function saveSignUpData(){
    localStorage.setItem('nameLastname',$('#nameLastname').val()); 
    localStorage.setItem('email',$('#input-email').val()); 
}
