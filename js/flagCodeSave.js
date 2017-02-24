/*---------Seleccionar pais---------*/
for(var k=0;k<13;k++){
    var country = document.getElementsByClassName('country');
    country[k].addEventListener('click',saveFlagCodeCountry);
}

function saveFlagCodeCountry(evt){
    console.log(evt.target.parentNode.firstChild.src);
    localStorage.setItem('flag',evt.target.parentNode.firstChild.src);       
    console.log(evt.target.parentNode.firstChild.nextElementSibling.nextElementSibling.textContent); localStorage.setItem('codeCountry',evt.target.parentNode.firstChild.nextElementSibling.nextElementSibling.textContent);       
}
