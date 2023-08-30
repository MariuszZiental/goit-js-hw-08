import throttle from 'lodash.throttle';

const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;

const LOCAL_KEY = 'feedback-form-state';

if (localStorage.length !== 0) {
  input.value = JSON.parse(localStorage.getItem(LOCAL_KEY)).email;
  textarea.value = JSON.parse(localStorage.getItem(LOCAL_KEY)).message;
}

form.addEventListener('input', throttle(getInputData, 500));
form.addEventListener('submit', submit);

function getInputData(event) {
  const inputData = { email: email.value, message: message.value };
  localStorage.setItem(LOCAL_KEY, JSON.stringify(inputData));
}

function submit(event) {
  event.preventDefault();
  console.log({ email: email.value, message: message.value });
  form.reset();
  localStorage.clear();
}
