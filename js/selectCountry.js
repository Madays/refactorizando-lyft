/*---------Displayando paises--------*/
var codeCountry;
var alphabet =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','#'];
for(var i=0;i<infoCountry.length;i++){
    var htmlLiCountry= '<li id="country" class="country"><a href="signUpNumber.html" style="text-decoration: none;" id="link">'+        
            '<img src='+ infoCountry[i].srcImg +' alt="" style="padding-right:10px;" id="flag-country">'+
            '<span>'+infoCountry[i].name+'</span>'+
            '<span id="code-country">'+infoCountry[i].phone_code+'</span>'+
                '<span style="float:right;margin-top:-5px;padding-right: 4px;">'+alphabet[2*i]+'<br>'+alphabet[2*i+1]+'</span>'+
                '<hr>'+
          '</a></li>';
    var listCountry = document.getElementById('list-country');
    listCountry.innerHTML+=htmlLiCountry;      
};


