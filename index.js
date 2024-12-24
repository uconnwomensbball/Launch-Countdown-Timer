const daysEl = document.getElementById("days-el")
const hoursEl = document.getElementById("hours-el")
const minutesEl = document.getElementById("minutes-el")
const secondsEl = document.getElementById("seconds-el")
const targetDate = new Date("2025-04-01T23:59:59") //countdown is set for April Fool's Day

function updateCountdown() {
    let now = new Date()
    let timeRemaining = targetDate - now
    
    let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
    let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000)
    
    daysEl.textContent = String(days).padStart(2, "0")
    hoursEl.textContent = String(hours).padStart(2, "0")
    minutesEl.textContent = String(minutes).padStart(2, "0")
    secondsEl.textContent = String(seconds).padStart(2, "0")
    }
    
setInterval(updateCountdown, 1000);