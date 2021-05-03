# TwoDigitsDisplay

Displays two digits (0-99) on the micro:bit LED display. A decimal point will be displayed between 0-9.9.  
It is also possible to display two hexadecimal digits of an integer.

![demo](demo.gif)

## Basic usage

```blocks
// Displays 0.0 to 99 in decimal
for (let index = 0; index <= 990; index++) {
    two_digits_display.showTwoDigitsNumber(index * 0.1)
    basic.pause(50)
}
// Displays 0 to 255(FF) in hexadecimal
for (let index = 0; index <= 255; index++) {
    two_digits_display.showTwoDigitsHexNumber(index)
    basic.pause(100)
}
```

![image](https://user-images.githubusercontent.com/10735253/116892391-bfd74880-ac6a-11eb-8ef3-3db4a368f2be.png)

Use ``||show number ~||`` to display 0.0-99 in decimal.

Use ``||show hex number ~||`` to display 0-255(FF) in hexadecimal.

## Original
[Tweets](https://twitter.com/tsjmt/status/1383378812574961668) by [tsjmt](https://twitter.com/tsjmt)

## License

MIT

## Supported targets

* for PXT/microbit
