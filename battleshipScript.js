function Ship(location1, location2, location1Guessed, location2Guessed) {
    this.location1 = location1 //string
    this.location2 = location2 //string
    this.location1Guessed = location1Guessed //bool
    this.location2Guessed = location2Guessed //bool
}

var ship1 = new Ship(null, null, false, false)
var ship2 = new Ship(null, null, false, false)
var ship3 = new Ship(null, null, false, false)
var ship4 = new Ship(null, null, false, false)
var ship5 = new Ship(null, null, false, false)

var shipsCreated = 0
var randomTile

function generateRandomTile(randomNum, randomNum2) {
    if (shipsCreated == 5) {
        alert("Maximum Number of Ships Reached")
        return
    }
    if (randomNum == 1) {
        randomTile = "a" + randomNum2.toString()
    }
    if (randomNum == 2) {
        randomTile = "b" + randomNum2.toString()
    }
    if (randomNum == 3) {
        randomTile = "c" + randomNum2.toString()
    }
    if (randomNum == 4) {
        randomTile = "d" + randomNum2.toString()
    }
    if (randomNum == 5) {
        randomTile = "e" + randomNum2.toString()
    }
    if (randomNum == 6) {
        randomTile = "f" + randomNum2.toString()
    }
    if (randomNum == 7) {
        randomTile = "g" + randomNum2.toString()
    }
    if (randomNum == 8) {
        randomTile = "h" + randomNum2.toString()
    }
    generateShipDirection()
}

var shipDirecton

function generateShipDirection() {
    var randomNum = Math.floor(Math.random() * 2) + 1
    if (randomNum == 1) {
        shipDirection = "vertical"
    } else {
        shipDirection = "horizontal"
    }
    shipsCreated++
    $("#shipIndicator").html("There Are " + shipsCreated + " Ship(s) on the Board")
    generateShips()
}

function generateShips() {
    var shipNumber = eval("ship" + shipsCreated)
    shipNumber.location1 = randomTile
    var ar1 = randomTile.split("")
    if (shipDirection == "horizontal") {
        eval(shipNumber).location2 = ar1[0] + (int(ar1[1]) + 1) //use of p5 library for int conversion
    }
    if (shipDirection == "vertical") {
        eval(shipNumber).location2 = String.fromCharCode(ar1[0].charCodeAt(0) + 1) + ar1[1]
    }

}


var guesses = 50

function play(userGuess) {
    if (guesses == 0) {
        alert("You Are Out of Guesses")
        return
    }
    guesses = guesses - 1
    $("#turnIndicator").html("You Have " + guesses + " Guesses Left")


    if (ship1.location1 == userGuess || ship1.location2 == userGuess) {
        document.getElementById(userGuess).style.background = '#a10000'

        if (!ship1.location1Guessed) {
            ship1.location1Guessed = true
        } else {
            ship1.location2Guessed = true
        }
    }

    if (ship2.location1 == userGuess || ship2.location2 == userGuess) {
        document.getElementById(userGuess).style.background = '#a10000'

        if (!ship2.location1Guessed) {
            ship2.location1Guessed = true
        } else {
            ship2.location2Guessed = true
        }
    }

    if (ship3.location1 == userGuess || ship3.location2 == userGuess) {
        document.getElementById(userGuess).style.background = '#a10000'

        if (!ship3.location1Guessed) {
            ship3.location1Guessed = true
        } else {
            ship3.location2Guessed = true
        }
    }

    if (ship4.location1 == userGuess || ship4.location2 == userGuess) {
        document.getElementById(userGuess).style.background = '#a10000'

        if (!ship4.location1Guessed) {
            ship4.location1Guessed = true
        } else {
            ship4.location2Guessed = true
        }
    }

    if (ship5.location1 == userGuess || ship5.location2 == userGuess) {
        document.getElementById(userGuess).style.background = '#a10000'

        if (!ship5.location1Guessed) {
            ship5.location1Guessed = true
        } else {
            ship5.location2Guessed = true
        }
    }

    if (!(ship1.location1 == userGuess || ship1.location2 == userGuess || ship2.location1 == userGuess || ship2.location2 == userGuess || ship3.location1 == userGuess || ship3.location2 == userGuess || ship4.location1 == userGuess || ship4.location2 == userGuess || ship5.location1 == userGuess || ship5.location2 == userGuess)) {
        document.getElementById(userGuess).style.background = '#9db2ff'
    }
}