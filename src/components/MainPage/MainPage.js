import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {useState} from 'react';
import {Link} from 'react-router-dom'
import './style.css';

export const MainPage = ()=> {
  
  const [chatType, setChatType] = useState('politic');
  
  return (
      <div className='chat-nav'>

        <ButtonGroup  variant="contained" aria-label="outlined primary button group">
          <Link to='/profile'>
            <Button variant="outlined" onClick={()=> setChatType('social')}>PROFILE PAGE</Button>
          </Link>
          <Link to='/chats'>
            <Button variant="outlined" onClick={()=> setChatType('social')}>CHAT PAGE</Button>
          </Link>
        </ButtonGroup>

      </div>
  );
}