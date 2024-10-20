const result = document.querySelector(".stopwatch");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset")

let interval;
let milliSec = 0;
let seconds = 0;
let minutes = 0;
let hour = 0;

function watch(){
    milliSec++;
    if(milliSec === 100){
        milliSec = 0;
        seconds++;
    }
    if(seconds === 60){
        seconds = 0;
        minutes++;
        if(minutes === 60){
            minutes = 0;
            hour++;
        }
    }

    result.textContent = 
    (hour < 10 ? "0":"") + hour +":" +
    (minutes < 10 ? "0":"") + minutes + ":" +
    (seconds < 10 ? "0":"") + seconds + ":" +
    (milliSec < 10 ? "0":"") + milliSec;
}

function startWatch(){
    interval = setInterval(watch, 10);
    start.setAttribute("disabled", true)
    
}

function stopwatch(){
    clearInterval(interval);
    start.removeAttribute("disabled");
}

function resetWatch(){
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hour = 0;
    result.textContent = "00:00:00:00";
    start.removeAttribute("disabled", false);
}