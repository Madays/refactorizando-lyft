function updateFlagCodeContry(){
    var lastFlag = document.getElementById('img-flag'); lastFlag.src=localStorage.getItem('flag');
    var codeCountry = document.getElementById('code');    
    codeCountry.textContent=localStorage.getItem('codeCountry'); 
    console.log(codeCountry);
}