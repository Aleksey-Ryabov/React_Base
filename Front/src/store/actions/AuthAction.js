

export const AuthValid = (data)=> ({
    type: 'ACCESS_ALLOW',
    payload: data
})

export const AuthNotValid = (data)=> ({
    type: 'ACCESS_DENIED',
    payload: data
})


export const fetchAuth = (user) => async(dispatch) => {
    const response = await fetch('http://localhost:3001/auth', {
        method: 'POST',
        headers: {"Content-Type": "application/json;charset=utf-8",},
        body: JSON.stringify(user),
    });
    const data = await response.json();
    console.log(data, 'action response data');

    if(data == true) {
        dispatch(AuthValid(data))
    }else {
        dispatch(AuthNotValid(data))
    }
}