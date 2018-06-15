
const timer = (function () {

    let countdown,
        timerDisplay,
        endTime,
        alarmSound;

    // Инициализация модулей
    function  init(settings) {
        timerDisplay = document.querySelector(settings.timerDisplaySelector);
        endTime =  document.querySelector(settings.endTimeSelector);
        alarmSound = new Audio(settings.alarmSounds);
        return this;
    }
    
    function start(seconds) {
    if (typeof seconds !== 'number') return new Error('Please provide seconds');

    const  now = Date.now();
    const then = now + seconds * 1000;
        displayTimeLeft(seconds);
        displayAndTime(then);

    countdown = setInterval( () => {
        const secondsLeft = Math.round( (then - Date.now())/1000 );
        if (secondsLeft < 0){
            clearInterval(countdown);
            alarmSound.play();
            return
        }
        displayTimeLeft(secondsLeft);

    },1000);

        return this;
    }
    function displayTimeLeft(seconds) {
        let display,
            day,
            hour,
            minutes,
            hourDisplay = '',
            reminderSeconds = seconds % 60;

        minutes = Math.floor(seconds /60);
        if (minutes > 60) {
            hour = Math.floor(minutes /60);
            minutes -= hour*60;
            if (hour > 24) {
                day = Math.floor(hour /24);
                hour -= day*24;
            }
        }
        if (hour){
            if(hour < 10) hourDisplay ='0'+ hour +':';
            else hourDisplay = hour + ":";
        }

        display = `${day > 0 ? day + ':' : ''}${hourDisplay}${minutes < 10 ? '0' : ''}${minutes}:${reminderSeconds < 10 ? '0' : ''}${reminderSeconds}`;
        timerDisplay.textContent = display;
        document.title = display;
    }

    function displayAndTime(timestamp) {
        const end = new Date(timestamp);
        endTime.textContent = `Be back at ${end.toLocaleString('en-GB')}`
    }

    function stop() {
        clearInterval(countdown);
        timerDisplay.textContent = '';
        endTime.textContent = '';
        document.title = '';
        alarmSound.pause();
        alarmSound.currentTime = 0;
        return this;
    }

    return {
        init,
        start,
        stop
    }
}) ();

const buttons = document.querySelectorAll('[data-time]');
const stopButtons = document.querySelector ('.stop__button');
const forms = document.forms[0];
const input = forms.elements['minutes'];
let inputSeconds;


timer.init({
    timerDisplaySelector:'.display__time-left',
    endTimeSelector:'.display__end-time',
    alarmSounds: 'audio/bell.mp3'
});

//Start timer on click
function startTimer(e) {
    timer.stop();
    const seconds = Number(this.dataset.time);
    timer.start(seconds);

}
function start(e) {
    timer.stop();
    if (typeof Number(input.value) !== 'number') return new Error ('Please provide number');
    inputSeconds = Number(input.value)*60;
}

//Events
stopButtons.addEventListener('click', evt => timer.stop());
buttons.forEach(btn => btn.addEventListener('click', startTimer));
input.addEventListener('input',start);
input.addEventListener('keydown', evt => {
    if(evt.keyCode === 13) {
        evt.preventDefault();
        timer.start(inputSeconds);
        input.value = '';
    }
});

