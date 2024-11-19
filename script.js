let countdown;
const timerDisplay = document.querySelector('.timer');
const startButton = document.getElementById('startButton');
const alarmSound = document.getElementById('alarmSound');
const timeInput = document.getElementById('timeInput');
const decreaseButton = document.getElementById('decreaseButton');
const increaseButton = document.getElementById('increaseButton');

function timer(seconds) {
    clearInterval(countdown);
    alarmSound.pause();
    alarmSound.currentTime = 0;
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft < 0) {
            clearInterval(countdown);
            alarmSound.play();
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const display = `${seconds < 10 ? '0' : ''}${seconds}`;
    timerDisplay.textContent = display;
}

startButton.addEventListener('click', () => {
    const seconds = parseInt(timeInput.value);
    timer(seconds);
});

decreaseButton.addEventListener('click', () => {
    let currentValue = parseInt(timeInput.value);
    if (currentValue > 1) {
        timeInput.value = currentValue - 1;
    }
});

increaseButton.addEventListener('click', () => {
    let currentValue = parseInt(timeInput.value);
    timeInput.value = currentValue + 1;
});
