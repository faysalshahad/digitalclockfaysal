const
hours = document.getElementById("hours"),
minutes =document.getElementById("minutes"),
seconds = document.getElementById("seconds"),
format = document.getElementById("format"),
dayText = document.getElementById("dayText"),
dateText = document.getElementById("dateText"),
monthText = document.getElementById("monthText"),
yearText = document.getElementById("yearText"),

daysArray = ["Sunday", "Monday", "Tuesday", 
"Wednesday", "Thursday", "Friday", "Saturday"];

let hoursValue, minutesValue, secondsValue, formatValue, today, daysValue,
dateOfTheMonth, monthValue, yearValue;

window.onload = checkDateTime();

function checkDateTime() {
    hoursValue = new Date().getHours();
    minutesValue = new Date().getMinutes();
    secondsValue = new Date().getSeconds();
    formatValue = "AM";
    today = new Date();
    /**Getting the day of the week */
    daysValue = daysArray[today.getDay()];
    /**Getting the current month */
    monthValue = today.toLocaleString("default", {month: "long"});
    console.log(monthValue);
    /**Getting the current date of the month */
    dateOfTheMonth = today.getDate();
    /**Getting the current year */
    yearValue = today.getFullYear();

    if (hoursValue > 12) {
        hoursValue = hoursValue - 12;
        formatValue = "PM"   
    }

    if (hoursValue < 10) {
        hoursValue = "0" + hoursValue;
    }

    if (minutesValue < 10) {
        minutesValue = "0" + minutesValue;
    }

    if (secondsValue < 10) {
        secondsValue = "0" + secondsValue;
    }

    hours.innerText = hoursValue;
    minutes.innerText = minutesValue;
    seconds.innerText = secondsValue;
    format.innerText = formatValue;
    dayText.innerText = daysValue + ",";
    dateText.innerText = dateOfTheMonth;
    monthText.innerText = monthValue + ",";
    yearText.innerText = yearValue;

     /**Calling this function repeatedly every 1000 miliseconds 
     * or 1 seconds */
    setInterval(()=>{
        updateTime();
    }, 1000)

};

function updateTime() {
    hoursValue = new Date().getHours();
    minutesValue = new Date().getMinutes();
    secondsValue = new Date().getSeconds();
    formatValue = "AM";

    if (hoursValue > 12) {
        hoursValue = hoursValue - 12;
        formatValue = "PM"   
    }

    if (hoursValue < 10) {
        hoursValue = "0" + hoursValue;
    }

    if (minutesValue < 10) {
        minutesValue = "0" + minutesValue;
    }

    if (secondsValue < 10) {
        secondsValue = "0" + secondsValue;
    }

    hours.innerText = hoursValue;
    minutes.innerText = minutesValue;
    seconds.innerText = secondsValue;
    format.innerText = formatValue;

};