function updateClock(){

let now = new Date()

let h = String(now.getHours()).padStart(2,"0")
let m = String(now.getMinutes()).padStart(2,"0")
let s = String(now.getSeconds()).padStart(2,"0")

document.getElementById("hours-top").textContent = h
document.getElementById("hours-bottom").textContent = h

document.getElementById("minutes-top").textContent = m
document.getElementById("minutes-bottom").textContent = m

document.getElementById("seconds-top").textContent = s
document.getElementById("seconds-bottom").textContent = s

}

setInterval(updateClock,1000)

updateClock()
