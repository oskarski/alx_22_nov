import { listUsers, createUser, editUser, deleteUser, signInUser } from './api.js';

// importuj listUsers i aliasuj getUsersFromApi
// import { listUsers as getUsersFromApi } from './api.js';

// Importuj jako obiekt aPi ( dowolna nazwa ), ktory ma pole listUsers
// import aPi from './api.js';

// aPi.listUsers()

const $usersList = document.getElementById('users-list');
const $createButton = document.getElementById('create');
const $editForm = document.getElementById('update-form');
const $loginForm = document.getElementById('login-form');
const $errorMsg = document.getElementById('error-msg');
const $deleteBtn = document.getElementById('delete-btn');

// const listUsers = () => {
//     const res = fetch('https://reqres.in/api/users')
//         .then(res => res.json())
//         .then(responseBody => {
//             const users = responseBody.data;

//             return users;
//         });

//     return res
// };
// 1 krok:
// const listUsers = () => {
//     return fetch('https://reqres.in/api/users')
//     .then(res => res.json())
//     .then(responseBody => {
//         const users = responseBody.data;

//         return users;
//     })
// };
// 2 krok:
// const listUsers = () => fetch('https://reqres.in/api/users')
// .then(res => res.json())
// .then(responseBody => {
//     const users = responseBody.data;

//     return users;
// });

// Pobieranie szczegolow

listUsers()
    .then(users => {
        // Zmapuj na HTML
        const $lis = users.map(user => `<li>${user.email}</li>`);

        // Wyswietl HTML
        $usersList.innerHTML = $lis.join('');
    })

$createButton.addEventListener('click', () => {
    createUser({ name: 'Maciek', job: 'Maszynista' })
        .then(data => {
            console.log(data);
        });
});

$editForm.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const id = formData.get('id');
    const name = formData.get('name');
    const job = formData.get('job');

    editUser(id, { 
        name,
        job
    })
        .then(data => {
            console.log(data);
        })
});

$loginForm.addEventListener('submit', e => {
    e.preventDefault();

    $errorMsg.innerText = '';

    const formData = new FormData(e.target);

    const email = formData.get('email');
    const password = formData.get('password');

    signInUser({ email, password })
        .then(data => {
            console.log('SUKCES', data);
        })
        .catch(error => {
            // console.log('BLAD', error)

            $errorMsg.innerText = error.message;
        })
});

$deleteBtn.addEventListener('click', () => {
    // Zakladamy, ze ten kod wywolujemy dla uzytkownika o id 1
    deleteUser(1)
    .then(() => {
        // np. zamknij modal lub przekieruj na strone listy uzytkownikow
    })
});