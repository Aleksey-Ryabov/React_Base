const initialState = {chats: [
    {id: 1, type: 'ЧАТ № 1'},
    {id: 2, type: 'ЧАТ № 2'},
    {id: 3, type: 'ЧАТ № 3'}
], chatMessages: [
    {id: 1, user: '', comment: ''},
    {id: 2, user: '', comment: ''},
    {id: 3, user: '', comment: ''}
]}


const chatsReduce = (state = initialState, {type, payload}) => {
    switch (type) {
        case 'ADD_CHAT' :
            return {...state, chats: [...state.chats, payload]}
        case 'REMOVE_CHAT' :
            return {...state, chats : [...state.chats.filter((elem)=> elem.id !== payload)]};
        case 'ADD_CHAT_COMMENT' :
            return {...state, chatMessages: [...state.chatMessages, payload]}
        default :
            return state;

    }
}

export default chatsReduce;