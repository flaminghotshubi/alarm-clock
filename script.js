// Initializing all the required divs/container
let currentTimeDiv = document.querySelector(".current-time");
let toggleAMPM = document.querySelector("#toggleAMPM");
let alarmForm = document.querySelector("#alarm-form");
let allAlarmsCont = document.querySelector(".all-alarms");

// array to store all alarms
let alarmsArray = [];

// if any user-entered value is a single digit, prefix with a zero, eg. 6 -> 06
const appendZero = (value) => {
    // if user has not given any value set it to zero
    if (!value) value = 0;
    value = value < 10 ? `0${value}` : value;
    return value;
}

// after prefixing with zero, form string using all values, eg. 06:12:00 PM
const formTimeString = (hours, minutes, seconds, AMPM) => {
    // check added to prevent user from setting alarm for 0 hours
    // this is a 12-hour format alarm application
    if (hours > 0) {
        hours = appendZero(hours);
        minutes = appendZero(minutes);
        seconds = appendZero(seconds);
        return `${hours}:${minutes}:${seconds} ${AMPM}`;
    }
}

// Add the newly created alarm to the array of alarms
function createAlarm(alarm) {
    let alarmCont = document.createElement("div");
    alarmCont.setAttribute("class", "alarm btn btn-light purple-border mb-2");
    alarmCont.innerHTML = `
    <div class="time-string">${alarm}</div>
    <div class="delete-btn">
        <button class="btn btn-danger">Delete</button>
    </div>`
    allAlarmsCont.appendChild(alarmCont);
    // Each alarm has a delete button which when clicked disables the alarm
    // and removes it from the array.
    let deleteBtn = alarmCont.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", (e) => {
        allAlarmsCont.removeChild(alarmCont);
        alarmsArray = alarmsArray.filter((alarmStr) => {
            return alarm !== alarmStr;
        })
    })
}

// Display the current time. Time is updated each second (1000 ms)
setInterval(function () {
    let currentTime = new Date();
    // Date constructor returns current date time in 24-hour clock format
    let hours = currentTime.getHours();
    let AMPM = "PM";
    // eg. if hours is 13 -> 13 - 12 = 1 (PM)
    if (hours > 12) {
        hours = hours - 12;
    } else if (hours < 12) {
        AMPM = "AM";
        if (hours == 0) {
            hours = 12
        }
    }
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    // get current time string and display
    let currentTimeStr = formTimeString(hours, minutes, seconds, AMPM);
    currentTimeDiv.innerText = currentTimeStr;
    // if current time string matches any alarm from the array
    // show the alert box
    alarmsArray.forEach((alarm) => {
        if (alarm === currentTimeStr) {
            alert(`Alarm triggered for ${currentTimeStr}`)
        }
    })
}, 1000);

// button to toggle between AM and PM
toggleAMPM.addEventListener("click", (e) => {
    if (e.target.value == "AM") toggleAMPM.value = "PM";
    else toggleAMPM.value = "AM";
})

// method behind set alarm button
alarmForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let hours = document.querySelector("#hours");
    let minutes = document.querySelector("#minutes");
    let seconds = document.querySelector("#seconds");
    let alarmTimeStr = formTimeString(hours.value, minutes.value, seconds.value, toggleAMPM.value);
    if (alarmTimeStr) {
        alarmsArray.push(alarmTimeStr);
        createAlarm(alarmTimeStr);
    } else window.alert("Hours cannot be zero! Invalid time");
    alarmForm.reset();
})
