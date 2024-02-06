import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

function createPromise(delay, isSuccess) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess === 'fulfilled') {
        resolve(`✅ Fulfilled promise in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  });
}

form.addEventListener('submit', event => {
  event.preventDefault();

  const isSuccess = event.target.state.value;
  const delay = Number(event.target.delay.value);

  createPromise(delay, isSuccess)
    .then(value => {
      iziToast.success({
        title: '',
        message: `${value}`,
        position: 'topRight',
        icon: '',
      });
    })
    .catch(error => {
      iziToast.error({
        title: '',
        message: `${error}`,
        position: 'topRight',
        icon: '',
      });
    });
});
