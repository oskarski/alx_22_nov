import { editUser, getUser } from '../api-json-server.js';

const $editForm = document.getElementById('edit-form');
const $emailInput = document.getElementById('email-input');

// Zakladamy ze modyfikujemy usera o id 3
const userId = 3;

getUser(userId)
    .then(user =>{
       $emailInput.setAttribute('value', user.email)
    })

$editForm.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const email = formData.get('email');

    editUser(userId, {
        email
    });
})