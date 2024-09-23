// actions/userActions.js

export const addUser = (user) => (dispatch) => {
    console.log('In action ' + user);
    dispatch({
        type: 'LOGIN',
        payload: user
    });
};

export const logoutUser = () => (dispatch) => {
    console.log('User logging out');
    dispatch({
        type: 'LOGOUT'
    });
};
