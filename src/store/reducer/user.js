const initialState={
    list: []
}
const user = (state=initialState,action)=>{
    console.log('In reducer ' + action.payload)
    if(action.type === 'LOGIN'){
        const temp = [...state.list];
        temp.push(action.payload);

        return {...state, list: [...temp]}
    }
     


    return state;
}


export default user; 