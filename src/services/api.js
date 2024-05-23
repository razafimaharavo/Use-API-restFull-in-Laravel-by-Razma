import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default {
    getUsers() {
        return apiClient.get('/users');
    },
    getUser(id) {
        return apiClient.get(`/users/${id}`);
    },
    createUser(data) {
        return apiClient.post('/users', data);
    },
    updateUser(id, data) {
        return apiClient.put(`/users/${id}`, data);
    },
    deleteUser(id) {
        return apiClient.delete(`/users/${id}`);
    }
};
