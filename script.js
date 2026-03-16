function updateClock() {

const now = new Date();

const hours = String(now.getHours()).padStart(2,"0");
const minutes = String(now.getMinutes()).padStart(2,"0");
const seconds = String(now.getSeconds()).padStart(2,"0");

document.getElementById("hours-top").textContent = hours;
document.getElementById("hours-bottom").textContent = hours;

document.getElementById("minutes-top").textContent = minutes;
document.getElementById("minutes-bottom").textContent = minutes;

document.getElementById("seconds-top").textContent = seconds;
document.getElementById("seconds-bottom").textContent = seconds;

}

updateClock();
setInterval(updateClock,1000);
