import {Link, useHistory} from 'react-router-dom';
import Button from '@mui/material/Button';
import Buttons from './Buttons/Buttons'
import logo from './img/2.jpg';
import './profileStyle.css';
import {useSelector} from 'react-redux';
import { ProfileCheckBox } from './ProfileCheckBox/ProfileCheckBox';

export const Profile =()=> {
    const history = useHistory();
    const todo = useSelector((state)=> state.todoList );
    
    return (
        <div className='profile-wrap'>
            <div className='profile-checkbox'>
                    <ProfileCheckBox />
            </div>
            <div>
                <img className='profile-img' style={{'width': '350px'}} src={logo}/>
                <p>СТРАНИЦА ПРОФИЛЯ</p> 
                <Button onClick={()=> history.push('/')} variant="outlined" >ВЕРНУТЬСЯ НА ГЛАВНУЮ СТРАНИЦУ</Button>
               
            </div>
        </div>
    )
}