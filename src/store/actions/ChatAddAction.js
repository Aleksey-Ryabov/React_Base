

export const ChatAddAction = (id)=> ({
    type: 'ADD_CHAT',
    payload:  {id: parseInt(Math.random()*100), type: 'ЧАТ № 1'}
})

export const ChatDelete = (id)=> (
    {
        type: 'REMOVE_CHAT',
        payload: id
    }
)

export default ChatAddAction;
