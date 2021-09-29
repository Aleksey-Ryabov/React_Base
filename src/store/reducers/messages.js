const initialState = [];

export const messageReduce = (state = initialState, {type, payload}) =>{
                    switch(type){
                        case 'ADD_MESSAGE':
                            return [...state, payload];
                        default :
                            return [{user: 'Aleksey', comment: 'Hello world!!!'}];
                    }


}

export default messageReduce;
