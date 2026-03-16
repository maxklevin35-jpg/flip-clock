function updateClock(){

let now = new Date()

let hours = String(now.getHours()).padStart(2,"0")
let minutes = String(now.getMinutes()).padStart(2,"0")
let seconds = String(now.getSeconds()).padStart(2,"0")

document.getElementById("hours-top").innerText = hours
document.getElementById("hours-bottom").innerText = hours

document.getElementById("minutes-top").innerText = minutes
document.getElementById("minutes-bottom").innerText = minutes

document.getElementById("seconds-top").innerText = seconds
document.getElementById("seconds-bottom").innerText = seconds

}

setInterval(updateClock,1000)

updateClock()
