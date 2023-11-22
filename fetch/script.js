// Powtorka z GET
// fetch('https://reqres.in/api/users')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//     })

// Pobieranie szczegolow
fetch('https://reqres.in/api/users/833')
    .then(res => res.json())
    .then(data => {
        console.log(data);

        // openUserModal(data.id);
    })

const $createButton = document.getElementById('create');
const $editForm = document.getElementById('update-form');
const $loginForm = document.getElementById('login-form');
const $errorMsg = document.getElementById('error-msg');
const $deleteBtn = document.getElementById('delete-btn');

$createButton.addEventListener('click', () => {
    fetch('https://reqres.in/api/users', {
        method: 'POST',
        body: JSON.stringify({
            "name": "Oskar",
            "job": "Developer"
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        });
});

$editForm.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const name = formData.get('name');
    const job = formData.get('job');

    fetch('https://reqres.in/api/users/1', {
        method: 'PUT',
        body: JSON.stringify({
            // name: name,
            // job: job,
            // Mozna krocej tak zapisac, pod polem, 
            //   ktore odpowiada nazwie zmiennej
            //   wstaw wartosc tej zmiennej
            name,
            job,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
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

    fetch('https://reqres.in/api/login', {
        method: 'POST',
        body: JSON.stringify({
            email,
            password,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => {
            console.log(res);

            if (res.status === 400) throw new Error('Bledne dane!');

            res.json()
        })
        .then(data => {
            console.log('SUKCES', data);
        })
        .catch(error => {
            // console.log('BLAD', error)

            $errorMsg.innerText = error.message;
        })
});

$deleteBtn.addEventListener('click', () => {
    fetch('https://reqres.in/api/users/1', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(() => {
        // np. zamknij modal lub przekieruj na strone listy uzytkownikow
    })
});