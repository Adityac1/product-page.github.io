var image = document.getElementById("product-image");
var red = document.getElementById("red");
var blue = document.getElementById("blue");
var purple = document.getElementById("purple");
var black = document.getElementById("black");
var pink = document.getElementById("pink");

red.addEventListener('click',function(){
    image.src = "https://i.imgur.com/PTgQlim.png";
})

blue.addEventListener('click',function(){
    image.src = "https://i.imgur.com/Mplj1YR.png";
    // alert("blue clicked")
})

purple.addEventListener('click',function(){
    image.src = "https://i.imgur.com/xSIK4M8.png";
})

black.addEventListener('click',function(){
    image.src = "https://i.imgur.com/iOeUBV7.png";
})

pink.addEventListener('click',function(){
    image.src = "https://i.imgur.com/Zygu7I3.png";
})



var timediv = document.getElementById("time-div")
var hours = document.getElementById("hour");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var meridian = document.getElementById("m");
setInterval(() => {
    //hour
    var a = new Date().getHours().toString();
    var hourcheck = (a.length>1)? a : a +=0;
    hours.innerText = hourcheck + ":";
    //minutes
    var b = new Date().getMinutes().toString();
    var mincheck = (b.length>1)? b : b +=0;
    minutes.innerText = mincheck + ":";
    // seconds
    var c = new Date().getSeconds().toString();
    var secscheck = (c.length>1)? c : c +=0;
    seconds.innerText = secscheck;
    //Meridian Checking
    if(hours<=12){
        meridian.innerText="AM"
    } else {
        meridian.innerText="PM"
    }
}, 1000);


//creating heart beat click
var heartrate = document.getElementById("Heart-Rate");
var time = document.getElementById("time");
var heartdiv = document.getElementById("heartdiv")
heartrate.addEventListener('click',function(){
    timediv.style.display = "none";
    heartdiv.style.display = "block";

})

//creating time button click

time.addEventListener('click',function(){
    timediv.style.display = "block";
    heartdiv.style.display = "none";
})

