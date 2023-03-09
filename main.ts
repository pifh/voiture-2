let colonne = 0
basic.showString("Hello!")
let ligne = 0
for (let index = 0; index < 5; index++) {
    colonne = 0
    for (let index = 0; index < 5; index++) {
        led.plot(colonne, ligne)
        colonne += 1
        basic.pause(100)
    }
    ligne += 1
}
while (!(input.buttonIsPressed(Button.AB))) {
	
}
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
})
