const initialState = {
    list: []
};

const user = (state = initialState, action) => {
    console.log('In reducer ' + action.payload);
    
    if (action.type === 'LOGIN') {
        const temp = [...state.list];
        temp.push(action.payload);
        return { ...state, list: [...temp] };
    }

    if (action.type === 'LOGOUT') {
        // Reset the state to the initial state
        return initialState;
    }

    if(action.type === 'CLEAR_LIST'){
        return { ...state, list: [] };
    }

    return state;
};

export default user;
