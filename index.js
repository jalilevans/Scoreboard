let homePoints = 0
let guestPoints = 0
document.getElementById("home-points").textContent = homePoints
document.getElementById("guest-points").textContent = guestPoints
let homeScore = document.getElementById("home-points")
let guestScore = document.getElementById("guest-points")

function add1home() {
    homePoints += 1
    homeScore.textContent = homePoints
}

function add2home() {
    homePoints += 2
    homeScore.textContent = homePoints
}

function add3home() {
    homePoints += 3
    homeScore.textContent = homePoints
}

function add1guest() {
    guestPoints += 1
    guestScore.textContent = guestPoints
}

function add2guest() {
    guestPoints += 2
    guestScore.textContent = guestPoints
}

function add3guest() {
    guestPoints += 3
    guestScore.textContent = guestPoints
}
