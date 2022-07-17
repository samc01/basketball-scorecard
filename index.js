// Variables

let homeScoreVar = 0
let guestScoreVar = 0

const plusOneHome = document.getElementById("plus-one-home")
const plusTwoHome = document.getElementById("plus-two-home")
const plusThreeHome = document.getElementById("plus-three-home")

const plusOneGuest = document.getElementById("plus-one-guest")
const plusTwoGuest = document.getElementById("plus-two-guest")
const plusThreeGuest = document.getElementById("plus-three-guest")

const resetScoreBtn = document.getElementById("reset-score")

const homeScore = document.getElementById("home-score")
const guestScore = document.getElementById("guest-score")

const homeTitle = document.getElementById("home")
const guestTitle = document.getElementById("guest")

// Functions

function updateScores() {
    homeScore.textContent = homeScoreVar
    guestScore.textContent = guestScoreVar
}

function checkWinner() {
    homeTitle.classList.remove("top-scorer")
    guestTitle.classList.remove("top-scorer")
    if (homeScoreVar > guestScoreVar) {
        homeTitle.classList.add("top-scorer")
    } 
    else if (guestScoreVar > homeScoreVar) {
        guestTitle.classList.add("top-scorer")
    } else {
        homeTitle.classList.remove("top-scorer")
        guestTitle.classList.remove("top-scorer")
    }
}

function addOne(team) {
    team === "home" ? homeScoreVar ++ : guestScoreVar ++  
    updateScores()
    checkWinner()
}

function addTwo(team) {
    team === "home" ? homeScoreVar +=2 : guestScoreVar +=2 
    updateScores()
    checkWinner()
}

function addThree(team) {
    team === "home" ? homeScoreVar +=3 : guestScoreVar +=3
    updateScores()
    checkWinner()
}

function resetScore() {
    homeScoreVar = 0
    guestScoreVar = 0
    updateScores()
    checkWinner()
}

// Event listeners

plusOneHome.addEventListener("click", () => addOne("home"))
plusTwoHome.addEventListener("click", () => addTwo("home"))
plusThreeHome.addEventListener("click", () => addThree("home"))

plusOneGuest.addEventListener("click", () => addOne("guest"))
plusTwoGuest.addEventListener("click", () => addTwo("guest"))
plusThreeGuest.addEventListener("click", () => addThree("guest"))

resetScoreBtn.addEventListener("click", () => resetScore())
