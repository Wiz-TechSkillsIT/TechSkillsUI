export const addUser = (user)=> (dispatch)=>{
    //call the api 

    console.log('In action ' +user)
    dispatch( {
        type: 'LOGIN',
        payload : user
    })
}

 