export const listUsers = () => fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(responseBody => {
        const users = responseBody.data;

        return users;
    });

// Data Transfer Object
export const createUser = dto => fetch('https://reqres.in/api/users', {
    method: 'POST',
    body: JSON.stringify({
        "name": dto.name,
        "job": dto.job,
    }),
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(res => res.json());

export const editUser = (id, dto) => fetch(`https://reqres.in/api/users/${id}`, {
    method: 'PUT',
    body: JSON.stringify(dto),
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(res => res.json())

export const deleteUser = id => fetch(`https://reqres.in/api/users/${id}`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const signInUser = (dto) =>  fetch('https://reqres.in/api/login', {
        method: 'POST',
        body: JSON.stringify(dto),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => {
        if (res.status === 400) throw new Error('Bledne dane!');

        res.json()
    })