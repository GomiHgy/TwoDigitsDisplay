// テストはここに来ます。このパッケージが拡張機能として使用されるときにはコンパイルされません。
two_digits_display.showTwoDigitsNumber(0)
let temp = 0.1
serial.writeNumber(temp)
serial.writeLine("")
while (!(input.buttonIsPressed(Button.A))) {
	
}
basic.forever(function () {
    temp = 0.1
    for (let index = 0; index <= 99; index++) {
        two_digits_display.showTwoDigitsNumber(temp)
        basic.pause(200)
        temp += 0.1
    }
    for (let index2 = 0; index2 <= 99; index2++) {
        two_digits_display.showTwoDigitsNumber(index2)
        basic.pause(200)
    }
    while (!(input.buttonIsPressed(Button.A))) {
    	
    }
})
