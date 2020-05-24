function gelb (aNum: number) {
    pins.analogWritePin(ampelseite[aNum]+1, dioden_helligkeit)
basic.pause(warte_kurz)
}
function gruen (aNum: number) {
    pins.analogWritePin(ampelseite[aNum]+0, 0)
pins.analogWritePin(ampelseite[aNum]+1, 0)
pins.analogWritePin(ampelseite[aNum]+2, dioden_helligkeit)
basic.pause(warte_lang)
    for (let index = 0; index < 4; index++) {
        pins.analogWritePin(ampelseite[aNum]+2, 0)
basic.pause(warte_blink / 2)
        pins.analogWritePin(ampelseite[aNum]+2, dioden_helligkeit)
basic.pause(warte_blink)
    }
    alle_aus(aNum)
    gelb(aNum)
}
function rot (aNum: number) {
    alle_aus(aNum)
    pins.analogWritePin(ampelseite[aNum]+0, dioden_helligkeit)
gruen((aNum + 1) % 2)
}
function alle_aus (aNum: number) {
    pins.analogWritePin(ampelseite[aNum]+0, 0)
pins.analogWritePin(ampelseite[aNum]+1, 0)
pins.analogWritePin(ampelseite[aNum]+2, 0)
}
let warte_blink = 0
let warte_kurz = 0
let warte_lang = 0
let dioden_helligkeit = 0
basic.showIcon(IconNames.Heart)
let ampelseite = [100, 112]
dioden_helligkeit = 512
let zfakt = 2
warte_lang = 5000 * zfakt
warte_kurz = 2000 * zfakt
warte_blink = 200 * zfakt
basic.forever(function () {
    rot(0)
    gelb(0)
    gruen(0)
})
