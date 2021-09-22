import {Link, useHistory} from 'react-router-dom';
import Button from '@mui/material/Button';
import logo from './img/2.jpg';
import './img/style.css'

export const Profile =()=> {
    const history = useHistory();
    return (
        <div className='profile-wrap'>
            <img className='profile-img' style={{'width': '350px'}} src={logo}/>
            <p>СТРАНИЦА ПРОФИЛЯ</p>
                <Button onClick={()=> history.push('/')} variant="outlined" >ВЕРНУТЬСЯ НА ГЛАВНУЮ СТРАНИЦУ</Button>

        </div>
    )
}