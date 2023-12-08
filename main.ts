input.onPinPressed(TouchPin.P0, function () {
    if (pins.analogReadPin(AnalogPin.P0) > 300) {
        turtle.pen(TurtlePenMode.Down)
        randomturnsmax = 238
    } else if (pins.analogReadPin(AnalogPin.P0) < 300) {
        turtle.setBrightness(0)
        randomturnsmax = 0
    }
})
input.onButtonPressed(Button.A, function () {
    turtle.turnLeft()
    turtle.forward(1)
})
input.onPinPressed(TouchPin.P2, function () {
    turtle.home()
})
input.onButtonPressed(Button.B, function () {
    turtle.turnRight()
    turtle.forward(1)
})
let randomturn = 0
let randomspeed = 0
let randomsteps = 0
let randomtimesamount = 0
let randomturnsmax = 0
turtle.setPosition(2, 2)
basic.forever(function () {
    for (let index = 0; index < randomtimesamount; index++) {
        turtle.forward(randomsteps)
        turtle.setSpeed(randomspeed)
        turtle.setBrightness(randint(0, randomturnsmax))
    }
    randomturn = randint(1, 2)
    randomtimesamount = randint(0, 10)
    randomspeed = randint(0, 50)
    randomsteps = randint(1, 10)
    if (randomturn == 1) {
        turtle.turnLeft()
    } else if (randomturn == 2) {
        turtle.turnRight()
    }
})
