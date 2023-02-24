import Throttle from 'lodash.throttle';

const LOCAL_STORAGE_KEY = 'feedback-form-state';
let formData = {
  email: '',
  message: '',
};

const refs = {
  email: document.querySelector('input[name="email"]'),
  message: document.querySelector('textarea[name="message"]'),
  form: document.querySelector('.feedback-form'),
};

const updateLocalStorage = Throttle(({ name, value }) => {
  formData[name] = value;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
}, 500);

const onSubmitButtonHandler = e => {
  e.preventDefault();
  refs.email.value = '';
  refs.message.value = '';
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  console.log(formData);
};

refs.email.addEventListener('input', e => {
  updateLocalStorage(e.target);
});

refs.message.addEventListener('input', e => {
  updateLocalStorage(e.target);
});

refs.form.addEventListener('submit', onSubmitButtonHandler);

if (localStorage.getItem(LOCAL_STORAGE_KEY) !== null) {
  formData = JSON.parse(localStorage[LOCAL_STORAGE_KEY]);
  refs.email.value = formData.email;
  refs.message.value = formData.message;
}
