// import { disableFormButton } from "./utils/auth.js";

const form = document.querySelector('#login__form--signin');

// disableFormButton('#signin-form input', '#signin-form button');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const emailAddress = formData.get('emailAddress');
    const password = formData.get('password');
    const _csrf = formData.get('_csrf');

    const body = { emailAddress, password, _csrf };

    const res = await fetch('/api/users/token', {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await res.json();
    if (!res.ok) {
        const { message } = data;
        const errorsContainer = document.querySelector('#errors-container');
        errorsContainer.innerHTML = message;
        return;
    }
    // redirect to dashboard
    window.location.href = '/dashboard';



});

//! NOTE --- this is demo form submission
const formDemo = document.querySelector('#login__form--demo');

// disableFormButton('#signin-form input', '#signin-form button');

formDemo.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(formDemo);
    const emailAddress = 'boba@demo.com';
    const password = 'password';
    const _csrf = formData.get('_csrf');

    const body = { emailAddress, password, _csrf };

    const res = await fetch('/api/users/token', {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await res.json();
    if (!res.ok) {
        const { message } = data;
        const errorsContainer = document.querySelector('#errors-container');
        errorsContainer.innerHTML = message;
        return;
    }
    // redirect to dashboard
    window.location.href = '/dashboard';



});
