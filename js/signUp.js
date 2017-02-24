/*------Validar formulario----*/
function adviceMessage(_id,_advice){
    var id = $(_id)[0];
    var idContainer = $(_id).parent().append('<br><span>'+_advice+'</span>').css("color","red");   
}
//eliminar adviceMessage
function deleteAdviceMessage(_id){
    var id = $(_id);
    id.next().remove();
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
    if(validate.isText(name.val())){  
        //console.log('letras');
        if(name.next()!==null){
            firstLetterUpperCase('#nameLastname');
            deleteAdviceMessage('#nameLastname');     
        }           
    }else{
        if(name.next().length==0){
            adviceMessage('#nameLastname','Ingresar su nombre y apellido');       
        } 
                      
    }       
}

function validateEmail(){
    
    var email = $('#input-email');
    if(validate.isEmail(email.val())){
            deleteAdviceMessage('#input-email');                
               
    }else{        
        adviceMessage('#input-email','Ingresar su correo');
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
    validateEmail();
    validateName();
    var name = $('#nameLastname'); 
    var email = $('#input-email');
    if((validate.isEmail(email.val()))&&(validate.isText(name.val()))&&($('#checkbox-agree').is(':checked'))){
        $('#btn-next-sign-Up').attr('href','app.html');
    }
    saveSignUpData();
}

function saveSignUpData(){
    localStorage.setItem('nameLastname',$('#nameLastname').val()); 
    localStorage.setItem('email',$('#input-email').val()); 
}
