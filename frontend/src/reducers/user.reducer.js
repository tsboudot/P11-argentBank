const initialState = {
    user: {
        body: {
            email: "",
            userName: "",
        }
    },
    isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
    error: null
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_USER':
            return {
                ...state,
                user: action.payload
            };
        case 'USER_LOGIN_SUCCESS':
            localStorage.setItem('isAuthenticated', 'true');
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
                error: null
            };
        case 'USER_LOGIN_FAILURE':
            return {
                ...state,
                user: null,
                isAuthenticated: false,
                error: action.payload
            };
        case 'USER_UPDATE_SUCCESS':
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload
                },
                error: null
            };
        case 'USER_UPDATE_FAILURE':
            return {
                ...state,
                error: action.payload
            };
        case 'USER_LOGOUT':
            localStorage.removeItem('isAuthenticated');
            return {
                ...state,
                isAuthenticated: false,
                user: initialState.user
            };
        default:
            return state;
    }
}
