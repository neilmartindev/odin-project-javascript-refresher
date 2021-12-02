// Example one
const playerOneName = "tim"
const playerTwoName = "jenn"
const playerOneMarker = "Z"
const playerTwoMarker = "O"

// Example two
const playerFour = {
    name: "brad",
    marker: "Y"
}

const playerFive = {
    name: "Mike",
    marker: "M"
}

function printName(player) {
    console.log(player.name)
}

console.log(playerOneName)
console.log(playerTwoName)

function gameOver(winningPlayer){
    console.log("Congrats")
    console.log(winningPlayer.name + "is the winner")
}

// Object constructors 
function Player(name, marker) {
    this.name = name
    this.marker = marker
    this.sayName = function () {
        console.log(name)
    }
}

const playerSix = new Player('steve', 'X')
const playerSeven = new Player ('also steve', 'S')
playerSix.sayName() // Logs steve
playerSeven.sayName() // Logs also steve
