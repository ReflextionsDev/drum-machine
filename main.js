// --- Audio Files --
const sfx_tick = new Audio('sounds/tick.mp3');
const sfx_tock = new Audio('sounds/tock.mp3')

// --- Document Elements ---
const tickCountText = document.querySelector('.count')
const beatsInput = document.querySelector('#beatsInput')

// --- Variables ---
let tickCount = 0
let tickMax = 4
let speed = 600

// --- Runtime ---
setTimeout(setupUpdate, speed/2);

function setupUpdate() {
    interval = setInterval(update, speed);
}

function update() {
    tickMax = Number(beatsInput.value)
    tickCount = tickCount >= tickMax ? 1 : tickCount + 1
    tickCountText.innerHTML = tickCount

    instruments.forEach((instrument) => {
        updateInstrument(instrument)
        {
            if (instrument.toggle) {
                if (instrument.beats.includes(tickCount)) {
                    if (instrument.name === 'metronome') {
                        (tickCount === tickMax) ? sfx_tock.play() : sfx_tick.play()
                    } else {
                        instrument.sfx.play()
                    }
                }
            }
        }
    })
}

// --- Instruments ---

class Instrument {
    constructor(name, toggle, beats, sfx) {
        this.name = name
        this.toggleInput = toggle
        this.beatsInput = beats
        this.sfx = sfx
    }
}

const metronome = createInstrument('metronome')
const kickdrum = createInstrument('kickdrum')
const hihat = createInstrument('hihat')
const snaredrum = createInstrument('snaredrum')

let instruments = [metronome, kickdrum, hihat, snaredrum]

function createInstrument(instrument) {
    const toggle = document.querySelector(`#${instrument}Toggle`)
    const beats = document.querySelector(`#${instrument}Beats`)
    const sfx = new Audio(`sounds/${instrument}.mp3`)

    const newInstrument = new Instrument(instrument, toggle, beats, sfx)
    return newInstrument
}

function updateInstrument(instrument) {
    instrument.toggle = instrument.toggleInput.checked,
        instrument.beats = instrument.beatsInput.value.split(",").map(Number)
}