// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3')

let tickCount = 0

const tickCountText = document.querySelector('.count')



// This function is called every 600ms
function update() {

    tickCount = tickCount >= 4 ? 1 : tickCount + 1
    tickCountText.innerHTML = tickCount


    tickCount === 4 ? tock.play() : tick.play()
}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
