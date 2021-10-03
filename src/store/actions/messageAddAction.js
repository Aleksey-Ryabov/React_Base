
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


export const addMessage = ()=> (dispatch, getState) => {
    const user = getState().messageReduce.user;
    const comment = getState().messageReduce.comment;
    setTimeout(()=>{
        dispatch(messageAddAction(user, comment));
    }, 2000)
}


export default messageAddAction;