/**
 * Display the number on the screen in two digits.
 */
//% blockId="two_digits_display" block="TwoDigitsDisplay"
//% weight=100 color=#5C2D91 icon="\uf26c"
namespace two_digits_display {
    let ledData = [
        [ 0b11, 0b01, 0b11, 0b11, 0b10, 0b11, 0b11, 0b11, 0b11, 0b11, 0b10, 0b11, 0b11, 0b10, 0b11, 0b11 ],
        [ 0b11, 0b01, 0b01, 0b01, 0b11, 0b10, 0b10, 0b01, 0b11, 0b11, 0b11, 0b11, 0b10, 0b11, 0b10, 0b10 ],
        [ 0b11, 0b01, 0b11, 0b11, 0b11, 0b11, 0b11, 0b01, 0b00, 0b11, 0b11, 0b10, 0b10, 0b11, 0b11, 0b11 ],
        [ 0b11, 0b01, 0b10, 0b01, 0b01, 0b01, 0b11, 0b01, 0b11, 0b01, 0b11, 0b11, 0b10, 0b11, 0b10, 0b10 ],
        [ 0b11, 0b01, 0b11, 0b11, 0b01, 0b11, 0b11, 0b01, 0b11, 0b11, 0b11, 0b11, 0b11, 0b10, 0b11, 0b10 ]
    ];

    /**
     * Display the number on the screen in two digits.
     * @param value 0.0-99 numbers, eg: 0
     * @param integerOnly If true, display only integers, eg: false
     */
    //% blockId="show_two_digits_number" block="show number %value (Show only integers %integerOnly)"
    //% parts="two_digits_display"
    export function showTwoDigitsNumber (value: number = 0, integerOnly : boolean = false) {
        // 整数表示のみ行う
        if(integerOnly){
            if(value < 100){
                showDot(false)
                showTwoColumnNumber(0, Math.trunc(value / 10) % 10)
                showTwoColumnNumber(3, Math.trunc(value) % 10)
            }
            return
        }

        let _value = Math.round(value * 10)
        if (_value % 10 == 0) { // 整数
            if(_value < 100){
                showDot(true)
                showTwoColumnNumber(0, Math.trunc(_value / 10) % 10)
                showTwoColumnNumber(3, 0)
            }else{
                showDot(false)
                showTwoColumnNumber(0, Math.trunc(_value / 100) % 10)
                showTwoColumnNumber(3, Math.trunc(_value / 10) % 10)
            }
        } else {
            if(_value < 100){
                showDot(true)
                showTwoColumnNumber(0, Math.trunc(_value / 10) % 10)
                showTwoColumnNumber(3, _value % 10)
            }else{
                showDot(false)
                showTwoColumnNumber(0, Math.trunc(_value / 100) % 10)
                showTwoColumnNumber(3, Math.trunc(_value / 10) % 10)
            }
        }
    }

    /**
     * Display the hex number on the screen in two digits.
     * @param value 0-255 numbers, eg: 0
     */
    //% blockId="show_two_digits_hex_number" block="show hex number %value"
    //% parts="two_digits_display"
    export function showTwoDigitsHexNumber (value: number = 0) {
        let _value = Math.round(value)
        if(_value < 0 || _value > 255){
            return
        }
        showDot(false)
        showTwoColumnNumber(0, Math.trunc(_value >> 4) % 16)
        showTwoColumnNumber(3, _value % 16)
    }

    /*
     * 指定位置に2列数字を表示する
     */
    function showTwoColumnNumber (startColomn: number, value: number) {
        if (startColomn < 0 || startColomn > 3) {
            return
        }
        if (value < 0 || value > 15) {
            return
        }
        for(let x = 0; x < 2; x++) {
            for(let y = 0; y < 5; y++) {
                if((ledData[y][value] >> (1 - x) & 1) != 0){ 
                    led.plot(startColomn + x, y)
                }else{
                    led.unplot(startColomn + x, y)
                }
            }
        }
    }

    /*
     * ドット部を表示する
     */
    function showDot (enable: boolean) {
        // ドット部以外の部分の表示を消去
        for(let index = 0; index < 4; index++) {
            led.unplot(2, index)
        }
        if (enable) {
            led.plotBrightness(2, 4, 50)
        } else {
            led.unplot(2, 4)
        }
    }
}
