DFRobotMaqueenPlus.I2CInit()
basic.forever(function () {
    basic.showNumber(DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2))
})
