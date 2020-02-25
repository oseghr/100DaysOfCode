const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const resetBtn = document.querySelector("#resetBtn");
const disp = document.querySelector(".disp");

startBtn.addEventListener("click", startFxn);
stopBtn.addEventListener("click", stopFxn);
resetBtn.addEventListener("click", resetFxn);

let timer;
let hour = 0;
let min = 0;
let sec = 0;

let hourX = `0${hour}`;
let minX = `0${min}`;
let secX = `0${sec}`;




function startFxn() {

    timer = setInterval(() => {
        sec++

        sec < 10 ? secX = `0${sec}` : secX = sec;
        min < 10 ? minX = `0${min}` : minX = min;    
        hour < 10 ? hourX = `0${hour}` : hourX = hour;
        
        if (sec == 60) {
            min++
            sec = 0;
        }
        if (min == 60) {
            hour++
            min = 0;      
        }
        if (hour == 23) {
            hour = 0;      
        }
    
        disp.innerHTML = `${hourX}:${minX}:${secX}`;
        startBtn.disabled = true;
        
    }, 1000);

}



function stopFxn() {

    clearInterval(timer);
    startBtn.disabled = false;
}

function resetFxn() {
    window.location.reload();
    disp.innerHTML = "00:00:00";
}



