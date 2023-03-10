let i = start = secTime = minTime = hourTime = miliTime = 0;

let miliSec = document.getElementById('milisec');
let sec = document.getElementById('sec');
let minute = document.getElementById('minute');
let hour = document.getElementById('hour');
let pause = document.getElementById('pause');
let listContainer = document.getElementById('list-container');
let lapDisplay = document.getElementById('lap-display');
let best = document.createElement('div');
best.innerHTML = `
    <h2 class="text-2xl bg-teal-300 text-white px-4 py-1 rounded mb-px">
                                Best </h2>`;
best.classList.add('w-1/6');

// START
document.getElementById('start').addEventListener('click', function () {
    console.log("Start Clicked");
    if (start == 0) {
        start = 1;
        interval();
    }
})


// Lap
document.getElementById('lap').addEventListener('click', function () {
    console.log('Lap Clicked');
    if (start == 1) {
        lapShowing();
    }
})

let arr = [];
let arrDifference = [];

// LapShowing Function
const lapShowing = () => {
    i += 1;
    lapDisplay.classList.remove('hidden');
    let list = document.createElement('div');
    list.classList.add(`flex`);
    list.classList.add(`gap-2`);
    list.classList.add(`mb-2`);
    // list.classList.add(`flex`);
    list.id = `${i}`;
    list.innerHTML = `
    <div class="w-full">
        <h2 id="${i}" class="text-2xl bg-slate-400 text-white w-full px-6 py-1 rounded mb-px">
            <span>${hourTime}</span> :
            <span>${minTime}</span> :
            <span>${secTime}</span> :
            <span>${miliTime}</span>
        </h2>
    </div>
    `;
    listContainer.appendChild(list);
    total = (hourTime * 3600000) + (minTime * 60000) + (secTime * 1000) + miliTime;

    ranking();

}

// Ranking Function
const ranking = () => {

    arr.push(total);

    arr.length == 1 ? arrDifference.push(arr[0]) : arrDifference.push(arr[arr.length - 1] - arr[arr.length - 2]);


    const maxNumber = Math.min(...arrDifference);
    const index = arrDifference.indexOf(maxNumber);

    // let best = document.getElementById('best');



    let bestContainer = document.getElementById(`${index + 1}`);
    bestContainer.appendChild(best)

}


// Interval Function
let first;
const interval = () => {
    first = setInterval(function () {
        miliTime++;
        miliConverter();
    }, 9)
}



const miliConverter = () => {
    let viewTime = miliTime * 11;
    write(miliSec, viewTime);
    converter();
}

const converter = () => {
    if (miliTime >= 100) {
        secTime++;
        miliTime = 0;
    }

    if (secTime >= 60) {
        secTime = 0;
        minTime += 1;
    };

    if (minTime >= 60) {
        minTime = 0;
        hourTime += 1;
    };

    write(sec, secTime);
    write(minute, minTime);
    write(hour, hourTime);
}

const write = (input1, input2) => {
    input1.innerHTML = input2.toString().length == 1 ? '0' + input2 : input2;
}


// PAUSE 
pause.addEventListener('click', function (event) {

    if (start == 1) {
        console.log("Pause Clicked");
        start = 2;
        event.target.innerText = 'RESUME';
        pauseButton();
        clearInterval(first);

    } else if (start == 2) {
        event.target.innerText = 'PAUSE';
        start = 1;
        pauseButton();
        interval()
    }
});

const pauseButton = () => {
    pause.classList.toggle('bg-slate-50');
    pause.classList.toggle('bg-teal-100');
    pause.classList.toggle('hover:bg-slate-300');
}

// RESET
document.getElementById('reset').addEventListener('click', function () {
    console.log("Reset Clicked");
    i = start = secTime = minTime = hourTime = miliTime = 0;
    miliSec.innerHTML = '00';
    sec.innerHTML = '00';
    minute.innerHTML = '00';
    hour.innerHTML = '00';

    arr = [];
    arrDifference = [];

    pause.innerHTML = 'PAUSE';
    pause.classList.add('bg-slate-50');
    pause.classList.remove('bg-teal-100');
    pause.classList.add('hover:bg-slate-300');
    clearInterval(first);

    listContainer.innerHTML = '';

    // let best = document.createElement('div');
    // best.innerHTML = `
    // <div id="best" class="w-1/6">
    //                         <h2 class="text-2xl bg-teal-300 text-white px-6 py-1 rounded mb-px">
    //                             Best </h2>
    //                     </div>`;

    // list.innerHTML = '';
    lapDisplay.classList.add('hidden');

})
