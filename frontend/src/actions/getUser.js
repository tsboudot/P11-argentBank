import api from '../api/api.js';
import { getUserProfile } from '../api/userApi.js';
export const loginUser = (email, password) => async dispatch => {
    try {
        const response = await api.post('/user/login', {
            email,
            password
        });

        const token = response.data.body.token;


        localStorage.setItem('token', token);
        const userProfile = await getUserProfile(token);

        dispatch({
            type: 'USER_LOGIN_SUCCESS',
            payload: userProfile.data
        });
    } catch (error) {
        console.error('Erreur lors de la connexion:', error);
        dispatch({
            type: 'USER_LOGIN_FAILURE',
            payload: error.message
        });
    }
};
export const logoutUser = () => {
    return dispatch => {
        localStorage.removeItem('authToken');
        dispatch({ type: 'USER_LOGOUT' });
    };
};