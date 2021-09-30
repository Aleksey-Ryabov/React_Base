import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { Messages } from '../Messages/Messages';
import Button from '@mui/material/Button';
import { BrowserRouter as Router, Switch, Route, Link, useHistory} from "react-router-dom";
import { makeStyles } from '@material-ui/styles';
import './style.css'

export const Chats =()=> {

    const useStyles = makeStyles({
        root: {
          marginBottom: '20px',
          marginTop: '20px'
        },
      });

    const classes = useStyles();
    const history = useHistory();
    const [chatArray, setChatArray] = useState([
        {id: 1, type: 'SOCIAL CHAT'},
        {id: 2, type: 'POLITIC CHAT'},
        {id: 3, type: 'NEWS CHAT'}
    ])

    const chatAdd = ()=> {
        const newChat = {
            id: parseInt(Math.random()*100),
            type: 'new chat'
        }
        setChatArray(prev=> [...chatArray, newChat])
    }

    const chatRemove = ()=> {
            setChatArray(prev=> [...chatArray.slice(1)])
    }

    return (
        <>
            <div className='chat-add-buttons'>
                <Button onClick={()=> chatAdd()} variant="outlined" className={classes.root}>ДОБАВИТЬ ЧАТ</Button>
                <Button onClick={()=> chatRemove()} variant="outlined" className={classes.root}>УДАЛИТЬ ЧАТ</Button>
            </div>
            {chatArray.map((elem) => {
                return (
                        <div key={elem.id} className="chat-element">
                            <Paper elevation={10} className="messagesUI" style={{'padding':'10px'}}>
                                <p className="messagesUI-p">ЧАТ № {elem.id}</p>
                                <Button className={classes.root} style={{'marginBottom': '20px'}} onClick={()=> history.push(`/chats/${elem.id}`)} variant="outlined">Перейти на страницу чата № {elem.id}</Button>
                                <Messages />
                            </Paper>
                        </div>
                );
            })}
        </>
    )
}