import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('.feedback-form input')
const textareaEl = document.querySelector('.feedback-form textarea')

const LOCAL_KEY = "feedback-form-state";
let formData = {};

formEl.addEventListener('submit', handleFormSubmit);
formEl.addEventListener('input', throttle(handleTextareaInput, 500));


function handleTextareaInput(event) {

    formData[event.target.name] = event.target.value;
    localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
}

function handleFormSubmit(event) {
    event.preventDefault();

    if (inputEl.value !== '' && textareaEl.value !== '') {
        console.log(formData);
       
       localStorage.removeItem(LOCAL_KEY);
        event.target.reset();
        formData = {};
        return;
    }
     
}
populetTextarea();

function populetTextarea() {
    const savedMessage = localStorage.getItem(LOCAL_KEY);

    if (savedMessage) {
        formData = JSON.parse(savedMessage);
        inputEl.value = formData.email || '';
        textareaEl.value = formData.message || '';
    }
}
