'use strict';
import throttle from 'lodash.throttle';

const input = document.querySelector('input');
const msg = document.querySelector('textarea');
const feedbackForm = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const throttleRun = throttle(saveMsg);

feedbackForm.addEventListener('input', throttleRun);
updateOutput();
feedbackForm.addEventListener('submit', clearMsg);

function clearMsg(e) {
  e.preventDefault();
  const add = {
    email: input.value,
    msg: msg.value,
  };
  
  feedbackForm.reset();
  localStorage.clear();
}

function saveMsg(e) {
  e.preventDefault();
  const add = {
    email: input.value,
    msg: msg.value,
  };
  
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(add));
}

function updateOutput() {
  try {
    const dataFromLS = localStorage.getItem(LOCALSTORAGE_KEY);
    const dataFromLSParsed = JSON.parse(dataFromLS);
    if (dataFromLS) {
      input.value = dataFromLSParsed.email || '';
      msg.value = dataFromLSParsed.msg || '';
    }
  } catch (error) {
    console.log(error.msg);
  }
}
