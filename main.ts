let _1 = 0
let _2 = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    _1 = input.temperature()
    _2 = 1.8 * _1 + 32
    basic.showNumber(_2)
})
