input.onButtonPressed(Button.A, function () {
    wuKong.setLightMode(wuKong.LightMode.BREATH)
    wuKong.setMotorSpeed(wuKong.MotorList.M2, 1000)
})
input.onButtonPressed(Button.AB, function () {
    wuKong.setLightMode(wuKong.LightMode.OFF)
    wuKong.stopMotor(wuKong.MotorList.M2)
})
input.onButtonPressed(Button.B, function () {
    wuKong.setMotorSpeed(wuKong.MotorList.M2, 50)
})
basic.showString("Hello, I am Eggbeater!")
basic.showLeds(`
    . # # # .
    # # . # #
    # # # # #
    # # # # #
    # . # . #
    `)
