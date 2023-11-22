import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'https://reqres.in/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

// Wykonanie operacji przed wyslaniem zadania
httpClient.interceptors.request.use(config => {
    console.log('Przed zadaniem HTTP');

    return config;
});

// Wykonanie operacji po otrzymaniu odpowiedzi
httpClient.interceptors.response.use(response => {
    console.log('Dane', response);
    if (response.status === 404) throw new Error(response.data.error)

    return response;
}, error => {
    console.log('Error: ', error);
});

export const listUsers = () => httpClient.get('/users')
    .then(res => {
        const users = res.data.data;

        return users;
    });

export const getUser = (id) => httpClient.get(`/users/${id}`)
    .then(res => res.data);

// Data Transfer Object
export const createUser = dto => httpClient.post('/users', {
    "name": dto.name,
    "job": dto.job,
})

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

export const signInUser = (dto) =>  httpClient.post('/login', dto);