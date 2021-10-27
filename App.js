window.onload = function(){
 document.querySelector('.preloader').style.display = 'none';   
}
var contdowntime = new Date("Jan 9, 2022 00:00:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = contdowntime - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.querySelector('#day').innerHTML = days;
    document.querySelector('#hours').innerHTML = hours;
    document.querySelector('#minutes').innerHTML = minutes;
    document.querySelector('#seconds').innerHTML = seconds;
    if(contdowntime <0){
        clearInterval(x);
        document.querySelector('#day').innerHTML = "00";
        document.querySelector('#hours').innerHTML ="00";
        document.querySelector('#minutes').innerHTML = "00";
        document.querySelector('#seconds').innerHTML = "00";
    }
}, 1000)
document.querySelector('#ahref').addEventListener("click",function(){
    window.location.href = "./DatingApp/"
})