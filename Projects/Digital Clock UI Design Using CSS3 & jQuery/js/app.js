$(document).ready(() => {
    function showTime() {
        // To Get current time/dat
        var date = new Date();

        //Make Variables to get hourse, minuts and seeconds
        var hours = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();

        //AM, PM, Settings
        var session = "AM"

        //conditions for time behavior

        if(hours >= 12){
            session = "PM";
        }

        if (hours > 12){
            hours = hours - 12;
        }

        hours = hours < 10 ? "0" + hours : hours;
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;
       
        // set variable to span
        $("#hours").text(hours);
        $("#Minuts").text(min);
        $("#Seconds").text(sec);
        $("#Period").text(session);

        //tochange time every seecond
        setTimeout(showTime, 1000);
    }
    showTime();
})