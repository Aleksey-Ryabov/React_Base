

export const messageAddAction = (userComment,commentUser)=> ({
    type: 'ADD_MESSAGE',
    payload:  {
        id: parseInt(Math.random()*100),
        user: userComment,
        comment: commentUser,
    }
})

export default messageAddAction;