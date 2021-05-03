# TwoDigitsDisplay

Displays two digits (0-99) on the micro:bit LED display. A decimal point will be displayed between 0-9.9.
It is also possible to display two hexadecimal digits of an integer.

![demo](demo.gif)

## Basic usage

```blocks
// Displays 0.0 to 99 in decimal
for (let index = 0; index <= 990; index++) {
    two_digits_display.showTwoDigitsNumber(index * 0.1)
    basic.pause(100)
}
// Displays 0 to 255 in hexadecimal
for (let index = 0; index <= 255; index++) {
    two_digits_display.showTwoDigitsHexNumber(index)
    basic.pause(50)
}
```

Use ``||showTwoDigitsNumber||`` to display 0.0-99 in decimal.

Use ``||showTwoDigitsHexNumber||`` to display 0-255 in hexadecimal.

## Original
[Tweets](https://twitter.com/tsjmt/status/1383378812574961668) by [tsjmt](https://twitter.com/tsjmt)

## License

MIT

## Supported targets

* for PXT/microbit
