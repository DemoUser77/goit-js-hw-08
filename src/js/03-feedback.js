import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const textareaEl = document.querySelector('.feedback-form textarea')

const LOCAL_KEY = "feedback-form-state";
const formData = {};

populetTextarea();

formEl.addEventListener('submit', handleFormSubmit);
textareaEl.addEventListener('input', throttle(handleTextareaInput, 500));


function handleTextareaInput(event) {
    const message = event.target.value;

    localStorage.setItem(LOCAL_KEY, message);

}

function handleFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(LOCAL_KEY);
}

function populetTextarea() {
    const savedMessage = localStorage.getItem(LOCAL_KEY);

    if (savedMessage) {
        console.log(savedMessage);
        textareaEl.value = savedMessage;
    }
    
}

formEl.addEventListener('input', e => {
    formData[e.target.name] = e.target.value;

    console.log(formData);

    localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
})