import { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { makeStyles } from '@material-ui/styles';
import { BrowserRouter as Router, Switch, Route, Link, useHistory} from "react-router-dom";
import { Chats } from './Chats/Chats';
import './style.css'

export const NavPage =()=> {

      const useStyles = makeStyles({
        root: {
          marginBottom: '20px'
        },
      });
      
      const classes = useStyles();
      const history = useHistory();
      const [buttons, setButtons] = useState([
        {id: 1},
        {id: 2},
        {id: 3}
      ])

    return (
      <div>

        <ButtonGroup className={classes.root} variant="contained" aria-label="outlined primary button group">

            {buttons.map((button)=> {
              return (
                    <Button key={button.id} onClick={()=> history.push(`/chats/${button.id}`)} >ЧАТ № {button.id}</Button>
              )
            })}
          
        </ButtonGroup><br/>

          <Button className={classes.root} onClick={()=> history.push('/')} variant="outlined" >ВЕРНУТЬСЯ НА ГЛАВНУЮ СТРАНИЦУ</Button><br/>
        
        <Chats/>

      </div>
    );
}