import { useEffect, useState, useRef } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/styles';
import './messagesStyle.css'
import { useDispatch, useSelector } from 'react-redux';
import messageAddAction from '../../../../store/actions/messageAddAction';
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


export const Messages = ()=> {

    const messageDispatch = useDispatch();
    const messages = useSelector(state => state.messageReduce);
    const [user, setUser] = useState('');
    const [comment, setComment] = useState('');
    const ref = useRef(null);
    const classes = useStyles();
    const getNewComment = (userName, commentUser)=> {
        messageDispatch(messageAddAction(userName, commentUser))
    }

        return (
            <>
                {messages.map((message) => {
                    return (
                    <p key={Math.random()*100} className="messagesUI-comment">
                        Пользователь: {message.user} , Текст комментария:{" "}
                        {message.comment}
                    </p>
                    );
                })}
                
                <div className="messages-input">
                    <div className='message-input-wrap'> 
                        <TextField className={classes.input} style={{'marginRight': '30px'}} ref={ref} onChange={(event) => setUser(event.target.value)} value={user} type="text" required id="standard-required" label="Введите свое имя"/>
                        <TextField ref={ref} onChange={(event) => setComment(event.target.value)} type="text"  required id="standard-required" label="Ваш комментарий"/><br />
                    </div>
                    <Button className={classes.root} onClick={()=> getNewComment(user, comment)} variant="outlined" style={{'margin-bottom':'20px'}} endIcon={<SendIcon />}>
                        ОТПРАВИТЬ КОММЕНТАРИЙ
                    </Button>
                </div>

            </>
        )
}