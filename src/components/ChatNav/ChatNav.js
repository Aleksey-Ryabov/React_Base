import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { ChatRender } from './ChatRender/ChatRender';
import {useState} from 'react'
import './style.css';

export const ChatNav = ()=> {
  
  const [chatType, setChatType] = useState('politic');
  
  return (
      <div className='chat-nav'>

        <ButtonGroup  variant="contained" aria-label="outlined primary button group">
          <Button onClick={()=> setChatType('social')}>SOCIAL CHAT</Button>
          <Button onClick={()=> setChatType('politic')}>POLITIC CHAT</Button>
          <Button onClick={()=> setChatType('news')}>NEWS CHAT</Button>
        </ButtonGroup>

        <ChatRender  chatType={chatType}/>

      </div>
  );
}