import throttle from 'lodash.throttle';
const formRef = document.querySelector('.feedback-form');
const inputRef = document.querySelector('input[type="email"]');
const textareaRef = document.querySelector('textarea[name="message"]');
// let throttle = require('lodash.throttle');

const LOCALSTORAGE_KEY = "feedback-form-state";
const userData = {};

formRef.addEventListener("input", throttle(enterInput, 500));
formRef.addEventListener("submit", saveMessage);

updateOutput();

function enterInput(event) {

  try {

    if (event.target.tagName === "INPUT") {
        userData.email = event.target.value;
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(userData));

    } else if (event.target.tagName === "TEXTAREA"){
        userData.password = event.target.value;
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(userData));
    }

  } catch (error) {
    console.log(error.name); // "SyntaxError"
    console.log(error.message); // Unexpected token W in JSON at position 0
  }
}

function saveMessage(event) {
  event.preventDefault();

  if (inputRef.value === "" || textareaRef.value === "") {
    return console.log("Please fill in all the fields!");
  }

  console.log(`Email: ${inputRef.value}, Password: ${textareaRef.value}`);

  localStorage.removeItem(LOCALSTORAGE_KEY);
  event.currentTarget.reset();
  textareaRef.value = "";
}

function updateOutput() {    
  try {
      const parsedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || "";

      inputRef.value = parsedData.email || "";
      textareaRef.value = parsedData.password || "";

    } catch (error) {
      console.log(error.name); // "SyntaxError"
      console.log(error.message); // Unexpected token W in JSON at position 0
    }
}