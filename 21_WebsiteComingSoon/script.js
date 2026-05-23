const days = document.querySelector("#days")
const hours = document.querySelector("#hours")
const minutes = document.querySelector("#minutes")
const seconds = document.querySelector("#seconds")

// Launch Date
let launchDate = new Date("June 30, 2026 00:00:00").getTime()

function updateTimer() {

    // Current Time
    let now = new Date().getTime()

    // Difference
    let distance = launchDate - now

    // Calculations
    let d = Math.floor(distance / (1000 * 60 * 60 * 24))

    let h = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )

    let m = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
    )

    let s = Math.floor(
        (distance % (1000 * 60)) / 1000
    )

    // Display
    days.innerHTML = d
    hours.innerHTML = h
    minutes.innerHTML = m
    seconds.innerHTML = s

    // Timer End
    if (distance < 0) {

        clearInterval(timer)

        days.innerHTML = "00"
        hours.innerHTML = "00"
        minutes.innerHTML = "00"
        seconds.innerHTML = "00"
    }
}

// Run Every Second
let timer = setInterval(updateTimer, 1000)

// Run Immediately
updateTimer()