// Solution 1

let a = 1
let i = 0;
let running = 0;
let pauseButton = document.getElementById('pause');
const display = document.getElementById('display');

document.getElementById('start').addEventListener('click', function () {
    a = a + 1
    if (a == 2) {
        interval('start');
    }
})

let first;
const interval = (s) => {
    if (s == 'start') {
        first = setInterval(function () {
            i++;
            display.innerHTML = i;
        }, 100);
    } else {
        clearInterval(first)
    }
}

pauseButton.addEventListener('click', function (event) {
    if (a == 1) {
        
    } else {
        let pause = event.target;
        console.log("Pause")
        pause.classList.remove('bg-slate-50');
        pause.classList.toggle('bg-green-200');
        if (running == 0) {
            pause.innerText = 'RESUME';
            running = 1;
            interval('stop')
        } else {
            pause.innerText = "PAUSE"
            running = 0;
            interval('start');
        }
    }
})

document.getElementById('reset').addEventListener('click', function () {
    interval('stop');
    display.innerText = '00';
    a = 1;
    i = 0;
    running = 0;

    let pause = document.getElementById('pause')

    pause.classList.add('bg-slate-50');
    pause.classList.remove('bg-green-200');
    pause.innerText = "PAUSE";
})

// Solution 2

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


