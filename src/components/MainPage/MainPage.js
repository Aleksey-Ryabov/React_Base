import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {useHistory} from 'react-router-dom'
import './style.css';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export const MainPage = ()=> {
  
  const history = useHistory();
  
  return (
      <div className='chat-nav'>

        <ButtonGroup  variant="contained" aria-label="outlined primary button group">
            <Button onClick={()=> history.push('/profile')} variant="outlined">PROFILE PAGE</Button>
            <Button onClick={()=> history.push('/navpage')} variant="outlined">CHAT PAGE</Button>
            <Button onClick={()=> history.push('/starwars')} variant="outlined">STAR WARS</Button>
        </ButtonGroup>

      </div>
  );
}