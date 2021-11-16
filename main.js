// Audio Files
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3')
const kickdrum = new Audio('sounds/kick-drum.mp3')
const hihat = new Audio('sounds/hi-hat.mp3')
const snaredrum = new Audio('sounds/snare-drum.mp3')

// Document Elements
const tickCountText = document.querySelector('.count')
const metronomeToggle = document.querySelector('#metronomeToggle')
const kickdrumToggle = document.querySelector('#kick-drum')
const hihatToggle = document.querySelector('#hi-hat')
const snaredrumToggle = document.querySelector('#snare-drum')

// Variables
let tickCount = 0

// This function is called every 600ms
function update() {

    tickCount = tickCount >= 4 ? 1 : tickCount + 1
    tickCountText.innerHTML = tickCount

    if (metronomeToggle.checked) {tickCount === 4 ? tock.play() : tick.play()}
    if (kickdrumToggle.checked) {kickdrum.play()}
    if (hihatToggle.checked) {hihat.play()}
    if (snaredrumToggle.checked) {snaredrum.play()}
}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
