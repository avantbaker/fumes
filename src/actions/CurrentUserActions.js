export const UPDATE_USER = 'UPDATE_USER';
export const updateUser = (user) => {
    return {
        type: 'UPDATE_USER',
        payload: user
    }
};

export const LOGOUT_USER = 'LOGOUT_USER';
export const logoutUser = () => {
    return {
        type: LOGOUT_USER,
        payload: {}
    }
};