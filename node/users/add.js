import { createUser } from '../api-json-server.js';

const $addForm = document.getElementById('add-form');

$addForm.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const email = formData.get('email');

    createUser({
        email
    });
})