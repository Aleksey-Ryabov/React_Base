const initialState = [
    {id: 1, type: 'ЧАТ № 1'},
    {id: 2, type: 'ЧАТ № 2'},
    {id: 3, type: 'ЧАТ № 3'}
];


const chatsReduce = (state = initialState, {type, payload}) => {
    switch (type) {
        case 'ADD_CHAT' :
            return [...state, payload]
        case 'REMOVE_CHAT' :
            return state.filter((elem)=> elem.id !== payload);
        default :
            return state;

    }

}

export default chatsReduce;