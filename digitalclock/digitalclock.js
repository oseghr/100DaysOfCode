function displayTime() {
    let date = new Date();

    let hrs = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let timeformat = timeFormat();

    let hrsX = hrs;
    let minX = min;
    let secX = sec;

    if (hrs < 10) {
        hrsX = `0${hrs}`;
    }
    else{
        hrsX = hrs;
    }

    if (min < 10) {
        minX = `0${min}`;
    }
    else{
        minX = min;
    }

    if (sec < 10) {
        secX = `0${sec}`;
    }
    else{
        secX = sec;
    }
    
    function timeFormat(time) {
        let timeformat = "AM";

        hrs < 12 ? timeformat = "AM" : timeformat = "PM";
        return timeformat;
    };

    document.querySelector("#clock").innerHTML = `${hrsX} : ${minX} : ${secX} ${timeformat}`;
}

displayTime();
setInterval(displayTime,1000);