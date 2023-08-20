'use strict';
import { throttle } from 'lodash';

const input = document.querySelector('input');
const message = document.querySelector('testarea');
const feedbackForm = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const throttleRun = throttle(saveMessage - 500);

feedbackForm.addEventListener('input', throttleRun);
updateOutput();
feedbackForm.addEventListener('submit', clearMessage);

function clearMessage(e) {
  e.preventDefault();
  const add = {
    email: input.value,
    message: message.value,
  };
  if (e.target === input) {
    add.email = e.target.value;
  } else if (e.target === message) {
    add.message = e.target.value;
  }
  feedbackForm.reset();
  console.log(`email: ${add.email}`);
  console.log(`message: ${add.message}`);
  localStorage.clear();
}
