let x = [1];

let running = 0;

document.getElementById('start').addEventListener('click', function () {
    console.log('Start Clicked');
    // console.log(a)
    let a = [...x];
    b = a[0] + 1;
    let i = 0;
    startCounting(b, i)
})



const display = document.getElementById('display');

function startCounting(b, i) {
    // console.log(a);
    if (b == 2) {
        let first;
        const interval = (status) => {
            if (status == 'start') {
                first = setInterval(function () {
                    i++;
                    display.innerHTML = i;
                }, 100);
            } else {
                clearInterval(first)
            }
        }

        interval('start')

        document.getElementById('pause').addEventListener('click', function (event) {
            let pause = event.target;

            pause.classList.toggle('bg-slate-50');
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
        })

        document.getElementById('reset').addEventListener('click', function() {
            interval('stop');
            display.innerText = '00';
            x[0] = 1;
            
        })
    }
    console.log(a)
}


