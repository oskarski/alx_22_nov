import { deleteUser } from '../api-json-server.js';

const $title = document.getElementById('title');
const $deleteBtn = document.getElementById('delete-btn');
const $errorMsg = document.getElementById('error-msg');

// Zakladamy ze modyfikujemy usera o id 3
const userId = 3;

$deleteBtn.addEventListener('click', () => {
    // pokaz spinner 

    deleteUser(userId)
        .then(() => {
            $title.innerText = 'Udalo sie!';
            $deleteBtn.classList.add('hidden');
        })
        .catch(() => {
            $errorMsg.innerText = 'Wystapil blad!'
        })
        .finally(() => {
              // ukryj spinner 
        })
});