function gelb (aNum: number) {
    pins.analogWritePin(ampelseite[aNum]+1, dioden_helligkeit)
aNum2 = (aNum + 1) % 2
    pins.analogWritePin(ampelseite[aNum2]+1, dioden_helligkeit)
basic.pause(warte_kurz)
    alle_aus(aNum)
    alle_aus(aNum2)
}
function gruen (aNum: number) {
    pins.analogWritePin(ampelseite[aNum]+0, 0)
pins.analogWritePin(ampelseite[aNum]+1, 0)
pins.analogWritePin(ampelseite[aNum]+2, dioden_helligkeit)
basic.pause(warte_lang)
    for (let index = 0; index < 4; index++) {
        pins.analogWritePin(ampelseite[aNum]+2, 0)
basic.pause(warte_blink)
        pins.analogWritePin(ampelseite[aNum]+2, dioden_helligkeit)
basic.pause(warte_blink)
    }
    alle_aus(aNum)
}
function rot (aNum: number) {
    alle_aus(aNum)
    pins.analogWritePin(ampelseite[aNum]+0, dioden_helligkeit)
gruen((aNum + 1) % 2)
}
input.onButtonPressed(Button.A, function () {
    if (zfakt != 1) {
        zfakt = 1
    } else {
        zfakt = 3
    }
    init()
})
function init () {
    dioden_helligkeit = 700
    warte_lang = 5000 * zfakt
    warte_kurz = 2000 * zfakt
    warte_blink = 300 * zfakt
    basic.showNumber(zfakt)
}
function alle_aus (aNum: number) {
    pins.analogWritePin(ampelseite[aNum]+0, 0)
pins.analogWritePin(ampelseite[aNum]+1, 0)
pins.analogWritePin(ampelseite[aNum]+2, 0)
}
// music.play('b:30', microbit.pin8)
// music.ringTone(Note.C,microbit.pin8)
input.onButtonPressed(Button.B, function () {
	
})
let warte_blink = 0
let warte_lang = 0
let warte_kurz = 0
let zfakt = 0
let aNum2 = 0
let dioden_helligkeit = 0
basic.showIcon(IconNames.Heart)
let ampelseite = [100, 112]
zfakt = 3
init()
basic.forever(function () {
    rot(0)
    gelb(0)
    rot(1)
    gelb(1)
    basic.pause(100)
    init()
})
