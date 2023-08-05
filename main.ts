let NUMERO = 0
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    NUMERO = randint(1, 3)
    if (NUMERO == 1) {
        basic.showIcon(IconNames.Yes)
    } else if (NUMERO == 2) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Meh)
    }
})
