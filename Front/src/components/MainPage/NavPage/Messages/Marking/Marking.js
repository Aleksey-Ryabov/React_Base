import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../messagesStyle.css'
import SendIcon from '@mui/icons-material/Send';
import { useDispatch, useSelector } from 'react-redux';
import { ChatAddComment } from '../../../../../store/actions/ChatAddAction';
import { addComment, addUser } from '../../../../../store/actions/messageAddAction';



export const Marking = ({useStyles, messages, userName, commentUser , classes, id})=> {

    const dispatch = useDispatch();
    const getUser = (user)=> {
        dispatch(addUser(user))
    };
    const getComment = (comment)=> {
        dispatch(addComment(comment))
    };
    const getNewComment = (id, userName, commentUser)=> {
            dispatch(ChatAddComment(id, userName, commentUser))
    };

    return (
        <>
             {messages.map((message) => {
                    if(message.id === id && message.user.length > 0) {
                        return (
                            <p className="messagesUI-comment"> Пользователь: {message.user} , Текст комментария: {message.comment} </p>
                        )
                    }
                    
                })}
                
                <div className="messages-input">
                    <div className='message-input-wrap'> 
                        <TextField className={classes.input} style={{'marginRight': '30px'}} onChange={(event) => getUser(event.target.value)} type="text" required id="standard-required" label="Введите свое имя"/>
                        <TextField onChange={(event) => getComment(event.target.value)} type="text"  required id="standard-required" label="Ваш комментарий"/><br />
                    </div>
                    <Button className={classes.root} onClick={()=> getNewComment(id, userName, commentUser)} variant="outlined" style={{'marginBottom':'20px'}} endIcon={<SendIcon />}>
                        ОТПРАВИТЬ КОММЕНТАРИЙ
                    </Button>
                </div>
        </>
    )
}