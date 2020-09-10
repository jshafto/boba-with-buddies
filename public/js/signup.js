// import { disableFormButton } from './utils/auth.js';

const form = document.querySelector('#signup-form');
const errorsContainer = document.querySelector("#errors-container");

// disableFormButton("#signup-form input", "#signup-form button");

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    // console.log('submitting');
    const formData = new FormData(form);
    const nickname = formData.get('nickname');
    const emailAddress = formData.get('emailAddress');
    const password = formData.get('password');
    const _csrf = formData.get('_csrf');

    const body = { emailAddress, nickname, password, _csrf };
    errorsContainer.innerHTML = '';
    const res = await fetch('/api/users', {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await res.json();
    if (!res.ok) {
        const { message, errors } = data;
        for (let error of errors) {
            const errorLi = document.createElement('li');
            errorLi.innerHTML = error;
            errorsContainer.appendChild(errorLi);
        }
        return;
    }

    window.location.href = '/dashboard';
});
