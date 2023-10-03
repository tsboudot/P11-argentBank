import api from './api';

export const registerUser = (userData) => {
    return api.post('/user/signup', userData);
};

export const loginUser = (credentials) => {
    return api.post('/user/login', credentials);
};

export const getUserProfile = (token) => {
    return api.post('/user/profile', {}, { headers: { Authorization: `Bearer ${token}` } });
};

export const updateUserProfile = (data, token) => {
    return api.put('/user/profile', data, { headers: { Authorization: `Bearer ${token}` } });
};
