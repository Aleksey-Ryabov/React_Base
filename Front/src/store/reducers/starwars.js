const initialState = { heroes: [], status: false, message: null};


export const starWarsReduce = (state = initialState, {type, payload}) => {
    switch(type) {
        case 'ADD_HERO':
            return {heroes: [payload], status: false, message: null};
        case 'GET_ERROR':
            return {status: payload.flag, message: payload.text}
        default :
            return state
    }
}

export default starWarsReduce;
