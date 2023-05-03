//get time
function showTime(){
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var session = "AM";

    if (h == 0){
        h = 12;
    }
    
    if (h >= 12){
        session = "PM";
    }
    if (h > 12){
        h = h - 12;
    }

    h < 10 ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var timeDisplay = h + ":" + m + ":" + s + " " + session;


    document.getElementById("MyClockDisplay").innerHTML = timeDisplay;

    setTimeout(showTime, 1000);
}
showTime();
//connecting to html 