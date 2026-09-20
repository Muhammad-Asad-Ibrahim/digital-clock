var hrs = document.getElementById("hrs");
var mins = document.getElementById("mins");
var secs = document.getElementById("secs");
var am = document.getElementById("am");
var pm = document.getElementById("pm");
var date = document.getElementById("date");
function digitalClock() {
    var currentDate = new Date();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    var am_pm = "";
    if (hours == 0) {
        am_pm = "AM";
        hours = 12;
    }
    else if (hours >= 1 && hours <= 11) {
        am_pm = "AM";
    }
    else if (hours == 12) {
        am_pm = "PM";
    }
    else {
        am_pm = "PM";
        hours = hours - 12;
    }
    if (am_pm == "AM") {
        am.className = "highlight";
        pm.className = "";
    }
    else {
        pm.className = "highlight";
        am.className = "";
    }
    hrs.innerText = hours;
    mins.innerText = minutes;
    secs.innerText = seconds;
    var dayList = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    var monthList = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    var day = dayList[currentDate.getDay()];
    var month = monthList[currentDate.getMonth()];
    var dateNum = currentDate.getDate();
    date.innerText = day + " " + month + " " + dateNum;
}
digitalClock();
setInterval(digitalClock, 1000);