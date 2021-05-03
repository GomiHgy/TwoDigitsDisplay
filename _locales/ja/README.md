# 2桁表示

micro:bitのLEDディスプレイに0-99の数の2桁表示を行います。0-9.9の間は小数点が表示されます。  
16進2桁の整数の表示を行うこともできます。

![demo](../../demo.gif)

## 使い方

```blocks
// 10進数で0.0-99を表示
for (let index = 0; index <= 990; index++) {
    two_digits_display.showTwoDigitsNumber(index * 0.1)
    basic.pause(50)
}
// 16進数で0-255(FF)を表示
for (let index = 0; index <= 255; index++) {
    two_digits_display.showTwoDigitsHexNumber(index)
    basic.pause(100)
}
```

![image](https://user-images.githubusercontent.com/10735253/116892828-36744600-ac6b-11eb-8c8e-49158671c352.png)

``||~ を2桁で表示する||`` は10進数で0.0-99を表示します。

``||~ を16進2桁で表示する||`` は16進数で0-255(FF)を表示します。

## 元ネタ
[tsjmt](https://twitter.com/tsjmt)さんの[ツイート](https://twitter.com/tsjmt/status/1383378812574961668)

## サポート

* for PXT/microbit

## ライセンス

MIT
