import { useEffect, useState, useRef } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/styles';
import '../style.css'

export const Messages = ()=> {

    const [messages, setMessages] = useState([]);
    const [user, setUser] = useState('');
    const [comment, setComment] = useState('');
    const ref = useRef(null);
    const useStyles = makeStyles({
        root: {
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          border: 0,
          borderRadius: 3,
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          color: 'white',
          height: 48,
          padding: '0 30px',
          margin: '20px'
        },
        input: {
            marginRight: '50px'
        }
      });
    const classes = useStyles();

    useEffect(()=> {
        ref.current.focus();
    },[])

    useEffect(()=> {
        ref.current.focus();
    },[messages])



    const getNewComment = (event)=> {
        event.preventDefault(); 
        const newComment = {
            id: parseInt(Math.random()*100),
            user,
            comment
        }
        setMessages(prev =>[...messages, newComment])

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
                    <TextField className={classes.input} style={{'marginRight': '30px'}} ref={ref} onChange={(event) => setUser(event.target.value)} value={user} type="text" required id="standard-required" label="Введите свое имя"/>
                    <TextField ref={ref} onChange={(event) => setComment(event.target.value)} type="text"  required id="standard-required" label="Ваш комментарий"/><br />
                    <Button className={classes.root} style={{'marginTop': '20px'}} onClick={getNewComment} variant="outlined">ОТПРАВИТЬ КОММЕНТАРИЙ</Button>
                </div>

            </>
        )
}