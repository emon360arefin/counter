let time = 0;
let started = 0
const display = document.getElementById('display');

document.getElementById('start').addEventListener('click', function () {
    if (started == 0) {
        started = 1;
        interval()
    }
})

let first;
const interval = () => {
    first = setInterval(function () {
        time++;
        valueDisplay()
    }, 100)
}

const endInterval = () => {
    clearInterval(first)
}

const valueDisplay = () => {
    display.innerText = time;
}

document.getElementById('reset').addEventListener('click', function () {
    time = 0;
    started = 0;
    valueDisplay();
    endInterval()
})

document.getElementById('pause').addEventListener('click', function() {
    if (started == 1) {
        endInterval();
        started = 2;
    } else if (started == 2) {
        interval();
        started = 1;
    }
})

