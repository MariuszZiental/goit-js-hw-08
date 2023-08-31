import throttle from 'lodash.throttle';

const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const form = document.querySelector('.feedback-form');

const LOCAL_KEY = 'feedback-form-state';

const lsData = localStorage.getItem(LOCAL_KEY);
if (lsData) {
  const parsedData = JSON.parse(lsData);
  input.value = parsedData.email;
  textarea.value = parsedData.message;
}

form.addEventListener('input', throttle(getInputData, 500));
form.addEventListener('submit', submit);

function getInputData(event) {
  const inputData = { input: input.value, message: textarea.value };
  localStorage.setItem(LOCAL_KEY, JSON.stringify(inputData));
}

function submit(event) {
  event.preventDefault();
  console.log({ input: input.value, textarea: textarea.value });
  form.reset();
  localStorage.clear();
}
