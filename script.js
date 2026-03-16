function updateClock(){

let now = new Date()

let hours = now.getHours()
let minutes = now.getMinutes()
let seconds = now.getSeconds()

document.getElementById("hours").innerText = hours
document.getElementById("minutes").innerText = minutes
document.getElementById("seconds").innerText = seconds

}

setInterval(updateClock,1000)

updateClock()
