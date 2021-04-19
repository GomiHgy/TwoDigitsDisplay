// テストはここに来ます。このパッケージが拡張機能として使用されるときにはコンパイルされません。
two_digits_display.showTwoDigitsNumber(0)
let temp = 0.1
serial.writeNumber(temp)
serial.writeLine("")
two_digits_display.showTwoDigitsNumber(1.1)
while (!(input.buttonIsPressed(Button.A))) {
	
}
basic.forever(function () {
    for (let index = -10; index <= 260; index++) {
        two_digits_display.showTwoDigitsHexNumber(index)
        basic.pause(200)
    }

    temp = 0.1

    two_digits_display.showTwoDigitsNumber(temp)
    for (let index = 0; index <= 999; index++) {
        two_digits_display.showTwoDigitsNumber(temp)
        basic.pause(200)
        temp += 0.1
    }
    while (!(input.buttonIsPressed(Button.A))) {
    	
    }
})
