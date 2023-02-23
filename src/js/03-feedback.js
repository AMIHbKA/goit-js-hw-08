import Throttle from 'lodash.throttle';

const LOCALSTORAGEKEY = 'feedback-form-state';
const 



const refs = {
  email: document.querySelector('input[name="email"]'),
  message: document.querySelector('textarea[name="message"]'),
};

// const storageChange = window.addEventListener('storage');

const onLocalStorageChange = e => {
    console.log(e.currentTarget.value);
    
};

refs.email.addEventListener('input', onLocalStorageChange);
