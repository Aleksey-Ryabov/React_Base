const initialState = {chatComment:[{user: 'Aleksey', comment: 'Hello world!!!'}],
                        user: 'Fedor', comment: 'Priviet!!!'
                };

export const messageReduce = (state = initialState, {type, payload}) =>{
    //console.log(state.chatComment, 'messageReduce')
    //console.log(type, 'TYPE')
    //console.log(payload, 'PAYLOAD')
                    switch(type){
                        case 'ADD_MESSAGE':
                            return {...state, chatComment: [...state.chatComment, payload]};
                        case 'ADD_USER':
                            return {...state, user: payload};
                        case 'ADD_COMMENT':
                            return {...state, comment: payload};
                        default :
                            return state;
                    }
}

export default messageReduce;