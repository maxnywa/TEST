const timer = (function () {

    let countdown,
        timerDisplay,
        endTime,
        alarmSound;

    // Инициализация модулей
    function  init(settings) {
        timerDisplay = document.querySelector(settings.timerDisplaySelector);
            endTime =  document.querySelector(settings.endTimeSelector);
    }
    
    function start(seconds) {
    if (typeof seconds !== 'number') return new Error('Please provide seconds');

    const  now = Date.now();
    const then = now + seconds * 1000;
        displayTimeLeft(seconds);
        displayAndTime(then);

    }
    function displayTimeLeft(seconds) {
        const minutes = Math.floor(seconds/60);
        const reminderSeconds = seconds % 60;

        const display = `${minutes}:${reminderSeconds < 10 ? '0' : ''}${reminderSeconds}`;
        timerDisplay.textContent = display;
        document.title = display;

    }
    function displayAndTime(timestamp) {
        const  end = new Date(timestamp);
        const hour = end.getHours();
        const minutes = end.getMinutes();

        endTime.textContent = `Be back at ${hour}:${minutes < 10 ? '0': ''}${minutes}`
    }
    return {
        init,
        start
    }
}) ();

const buttons = document.querySelectorAll('[data-time]');

timer.init({
    timerDisplaySelector:'.display__time-left',
    endTimeSelector:'.display__end-time'
});

//Start timer on click
function startTimer(e) {
    const seconds = Number(this.dataset.time);
    timer.start(seconds);
}

buttons.forEach(btn => btn.addEventListener('click', startTimer));
