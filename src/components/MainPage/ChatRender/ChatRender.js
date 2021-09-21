import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { Messages } from './Messages/Messages';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import './style.css'

export const ChatRender =()=> {

    const [chatType, setChatType] = useState('politic');

    const [chatArray, setChatArray] = useState([
        {id: 1, type: 'SOCIAL CHAT'},
        {id: 2, type: 'POLITIC CHAT'},
        {id: 3, type: 'NEWS CHAT'}
    ])


    return (
      <div>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button onClick={() => setChatType("social")}>SOCIAL CHAT</Button>
          <Button onClick={() => setChatType("politic")}>POLITIC CHAT</Button>
          <Button onClick={() => setChatType("news")}>NEWS CHAT</Button>
          <Link to='/chat/news'>
            <Button onClick={() => setChatType("news")}>NEWS CHAT</Button>
          </Link>
        </ButtonGroup><br/>

        <Link to='/'>
          <Button variant="outlined" >ВЕРНУТЬСЯ НА ГЛАВНУЮ СТРАНИЦУ</Button>
        </Link>

        {chatArray.map((elem) => {
          return (
            <div key={elem.id} className="chat-element">
                <Paper elevation={10} className="messagesUI">
                  <p className="messagesUI-p">{elem.type}</p>
                  <Messages />
                </Paper>
            </div>
          );
        })}
      </div>
    );
}