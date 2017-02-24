function logIn(evt){

    evt.preventDefault();
    console.log(localStorage.getItem('flag'));
    if(localStorage.getItem('flag')!=null){
        //alert('si se puede');
        location.href='app.html';
    }else{
        alert('Sign Up');
    }
}
