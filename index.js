var countdownElement =document.getElementById('countdown');
let bgImg = document.getElementById('bg-image');

var initialCountdownElement = countdownElement.innerHTML;
setInterval(function() {
    initialCountdownElement = initialCountdownElement > 0 ? initialCountdownElement -1 : 0;

    countdownElement.innerHTML = initialCountdownElement ;
    let imgpath = initialCountdownElement % 2 === 0 ? 'img/bg1.jpg' : 'img/dice1.gif'
    bgImg.src = imgpath;
},1000);
console.log(initialCountdownElement)