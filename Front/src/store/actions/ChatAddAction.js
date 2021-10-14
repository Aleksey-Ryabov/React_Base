


export const ChatAddAction = ()=> ({
    type: 'ADD_CHAT',
    payload: {id : parseInt( Math.random()* 200)}
})

export const ChatAddComment = (id, user, comment)=> ({
    type: 'ADD_CHAT_COMMENT',
    payload : {id, user, comment}
})

export const ChatDelete = (id)=> (
    {
        type: 'REMOVE_CHAT',
        payload: id
    }
)

export default ChatAddAction;