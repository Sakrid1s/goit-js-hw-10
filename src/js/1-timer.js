import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let userSelectedDate;

const startBtnEl = document.querySelector('[data-start]');
startBtnEl.disabled = true;

const inputEl = document.querySelector('#datetime-picker');
const timerFieldEl = document.querySelector('.timer');
const timerDays = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hourse]');
const timerMinutes = document.querySelector('[data-minutes]');
const timerSeconds = document.querySelector('[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] > Date.now()) {
      userSelectedDate = selectedDates[0];
      startBtnEl.disabled = false;
    } else {
      iziToast.error({
        message: 'Please choose a date in the future',
        position: 'topRight',
      });
    }
  },
};

class Timer {
  constructor(tick) {
    this.tick = tick;
  }
  start() {
    setInterval(() => {
      const diff = userSelectedDate - Date.now();
      const time = this.convertMs(diff);
      this.tick(time);
    }, 1000);
    startBtnEl.disabled = true;
    inputEl.disabled = true;
  }
  convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  }
}

const timer = new Timer(onTimerTick);

startBtnEl.addEventListener('click', () => {
  timer.start();
});

function onTimerTick(time) {
  console.log(time);
}

flatpickr('#datetime-picker', options);
