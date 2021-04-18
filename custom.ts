/**
 * Display the number on the screen in two digits.
 */
//% weight=100 color=#5C2D91 icon="\uf26c" block="TwoDigitsDisplay"
namespace two_digits_display {
    function showTwoColumnNumber (startColomn: number, value: number) {
        if (startColomn < 0 || startColomn > 3) {
            return
        }
        if (value < 0 || value > 9) {
            return
        }

        switch(value){
            case 0:
                led.plot(startColomn, 0)
                led.plot(startColomn, 1)
                led.plot(startColomn, 2)
                led.plot(startColomn, 3)
                led.plot(startColomn, 4)
                led.plot(startColomn + 1, 0)
                led.plot(startColomn + 1, 1)
                led.plot(startColomn + 1, 2)
                led.plot(startColomn + 1, 3)
                led.plot(startColomn + 1, 4)
            break;
            case 1:
                led.unplot(startColomn, 0)
                led.unplot(startColomn, 1)
                led.unplot(startColomn, 2)
                led.unplot(startColomn, 3)
                led.unplot(startColomn, 4)
                led.plot(startColomn + 1, 0)
                led.plot(startColomn + 1, 1)
                led.plot(startColomn + 1, 2)
                led.plot(startColomn + 1, 3)
                led.plot(startColomn + 1, 4)
            break;
            case 2:
                led.plot(startColomn, 0)
                led.unplot(startColomn, 1)
                led.plot(startColomn, 2)
                led.plot(startColomn, 3)
                led.plot(startColomn, 4)
                led.plot(startColomn + 1, 0)
                led.plot(startColomn + 1, 1)
                led.plot(startColomn + 1, 2)
                led.unplot(startColomn + 1, 3)
                led.plot(startColomn + 1, 4)
            break;
            case 3:
                led.plot(startColomn, 0)
                led.unplot(startColomn, 1)
                led.plot(startColomn, 2)
                led.unplot(startColomn, 3)
                led.plot(startColomn, 4)
                led.plot(startColomn + 1, 0)
                led.plot(startColomn + 1, 1)
                led.plot(startColomn + 1, 2)
                led.plot(startColomn + 1, 3)
                led.plot(startColomn + 1, 4)
            break;
            case 4:
                led.plot(startColomn, 0)
                led.plot(startColomn, 1)
                led.plot(startColomn, 2)
                led.unplot(startColomn, 3)
                led.unplot(startColomn, 4)
                led.unplot(startColomn + 1, 0)
                led.plot(startColomn + 1, 1)
                led.plot(startColomn + 1, 2)
                led.plot(startColomn + 1, 3)
                led.plot(startColomn + 1, 4)
            break;
            case 5:
                led.plot(startColomn, 0)
                led.plot(startColomn, 1)
                led.plot(startColomn, 2)
                led.unplot(startColomn, 3)
                led.plot(startColomn, 4)
                led.plot(startColomn + 1, 0)
                led.unplot(startColomn + 1, 1)
                led.plot(startColomn + 1, 2)
                led.plot(startColomn + 1, 3)
                led.plot(startColomn + 1, 4)
            break;
            case 6:
                led.plot(startColomn, 0)
                led.plot(startColomn, 1)
                led.plot(startColomn, 2)
                led.plot(startColomn, 3)
                led.plot(startColomn, 4)
                led.plot(startColomn + 1, 0)
                led.unplot(startColomn + 1, 1)
                led.plot(startColomn + 1, 2)
                led.plot(startColomn + 1, 3)
                led.plot(startColomn + 1, 4)
            break;
            case 7:
                led.plot(startColomn, 0)
                led.unplot(startColomn, 1)
                led.unplot(startColomn, 2)
                led.unplot(startColomn, 3)
                led.unplot(startColomn, 4)
                led.plot(startColomn + 1, 0)
                led.plot(startColomn + 1, 1)
                led.plot(startColomn + 1, 2)
                led.plot(startColomn + 1, 3)
                led.plot(startColomn + 1, 4)
            break;
            case 8:
                led.plot(startColomn, 0)
                led.plot(startColomn, 1)
                led.unplot(startColomn, 2)
                led.plot(startColomn, 3)
                led.plot(startColomn, 4)
                led.plot(startColomn + 1, 0)
                led.plot(startColomn + 1, 1)
                led.unplot(startColomn + 1, 2)
                led.plot(startColomn + 1, 3)
                led.plot(startColomn + 1, 4)
            break;
            case 9:
                led.plot(startColomn, 0)
                led.plot(startColomn, 1)
                led.plot(startColomn, 2)
                led.unplot(startColomn, 3)
                led.plot(startColomn, 4)
                led.plot(startColomn + 1, 0)
                led.plot(startColomn + 1, 1)
                led.plot(startColomn + 1, 2)
                led.plot(startColomn + 1, 3)
                led.plot(startColomn + 1, 4)
            break;
        }
    }

    /**
     * Display the number on the screen in two digits.
     * 
     * @param value 0.0-99 numbers, eg: 0
     */
    //% blockId="show_two_digits_number" block="Display the number on the screen in two digits %value"
    export function showTwoDigitsNumber (value: number) {
        serial.writeNumber(value)
        serial.writeString("->")
        let _value = Math.round(value * 10)
        serial.writeNumber(_value)
        serial.writeLine("")
        if (_value % 10 == 0) { // 整数
            if(_value < 100){ // 0~9かつ整数
                showDot(true)
                showTwoColumnNumber(0, (_value / 10) % 10)
                showTwoColumnNumber(3, 0)
            }else{
                showDot(false)
                showTwoColumnNumber(0, (_value / 100) % 10)
                showTwoColumnNumber(3, (_value / 10) % 10)
            }
        } else {
            showDot(true)
            showTwoColumnNumber(0, (_value) / 10)
            showTwoColumnNumber(3, (_value) % 10)
        }
    }

    function showDot (enable: boolean) {
        if (enable) {
            led.plotBrightness(2, 4, 50)
        } else {
            led.plotBrightness(2, 4, 0)
        }
    }
}
