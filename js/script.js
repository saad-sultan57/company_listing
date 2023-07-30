
var navbar=document.getElementById('fixg');
var topbtn=document.querySelector('#top');

var sticky=navbar.offsetTop;

window.addEventListener('scroll',function(){

if(this.window.pageYOffset >sticky){
navbar.classList.add('fixnav');
}else{
navbar.classList.remove('fixnav');
}

});


topbtn.addEventListener('click',function(){

window.scrollTo({
top:0,
behavior:"smooth"
})

});