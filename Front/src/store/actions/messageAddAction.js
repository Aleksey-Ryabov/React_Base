
export const messageAddAction = (userComment,commentUser)=> ({
    type: 'ADD_MESSAGE',
    payload:  {
        id: parseInt(Math.random()*100),
        user: userComment,
        comment: commentUser,
    }
})

export const addUser = (user)=> ({
    type: 'ADD_USER',
    payload: user
})

export const addComment = (comment)=> ({
    type: 'ADD_COMMENT',
    payload: comment
})


export default messageAddAction;