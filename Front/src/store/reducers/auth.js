const initialState = false;

export const userAuthReduce = (state = initialState, {type, payload})=> {
    switch(type){
        case 'ACCESS_ALLOW': 
            return true
        case 'ACCESS_DENIED': 
            return false;
        default :
            return state
    }
}