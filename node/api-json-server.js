import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'http://localhost:3004',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const listUsers = () => httpClient.get('/users')
    .then(res => {
        const users = res.data;

        return users;
    });

export const getUser = (id) => httpClient.get(`/users/${id}`)
    .then(res => res.data);

// Data Transfer Object
export const createUser = dto => httpClient.post('/users', {
    "email": dto.email,
})

export const editUser = (id, dto) =>  httpClient.put(`/users/${id}`, dto);

export const deleteUser = id => httpClient.delete(`/users/${id}`);

export const signInUser = dto =>  httpClient.post('/login', dto);