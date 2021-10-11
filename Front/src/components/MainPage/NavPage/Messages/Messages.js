import { useEffect, useState, useRef } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/styles';
import './messagesStyle.css'
import { useDispatch, useSelector } from 'react-redux';
import messageAddAction, { addComment, addUser} from '../../../../store/actions/messageAddAction';
import SendIcon from '@mui/icons-material/Send';


const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 0,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
      marginTop: '20px'
    },
    input: {
        marginRight: '50px'
    }
  });

export const Messages = ({id})=> {

    const dispatch = useDispatch();
    const messages = useSelector(state => state.messageReduce.chatComment);
    const userName = useSelector(state => state.messageReduce.user);
    const commentUser = useSelector(state => state.messageReduce.comment);
    const classes = useStyles();

    const getUser = (user)=> {
        dispatch(addUser(user))
    }
    const getComment = (comment)=> {
        dispatch(addComment(comment))
    }
    const getNewComment = (userName, commentUser)=> {
        console.log(userName, commentUser, 'get comment')
            dispatch(messageAddAction(userName, commentUser))
    }

    console.log(messages, 'MESSAGES MAP')


        return (
            <>
                {messages.map((message) => {
                    return (<p key={id} className="messagesUI-comment">
                                Пользователь: {message.user} , Текст комментария: {message.comment}
                            </p>
                    )
                })}
                
                <div className="messages-input">
                    <div className='message-input-wrap'> 
                        <TextField className={classes.input} style={{'marginRight': '30px'}} onChange={(event) => getUser(event.target.value)} type="text" required id="standard-required" label="Введите свое имя"/>
                        <TextField onChange={(event) => getComment(event.target.value)} type="text"  required id="standard-required" label="Ваш комментарий"/><br />
                    </div>
                    <Button className={classes.root} onClick={()=> getNewComment(userName, commentUser)} variant="outlined" style={{'marginBottom':'20px'}} endIcon={<SendIcon />}>
                        ОТПРАВИТЬ КОММЕНТАРИЙ
                    </Button>
                </div>

            </>
        )
}