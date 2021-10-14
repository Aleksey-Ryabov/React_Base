const initialState = {user: '', comment: ''};

export const messageReduce = (state = initialState, {type, payload}) =>{
                    switch(type){
                        case 'ADD_USER':
                            return {...state, user: payload};
                        case 'ADD_COMMENT':
                            return {...state, comment: payload};
                        default :
                            return state;
                    }
}

export default messageReduce;