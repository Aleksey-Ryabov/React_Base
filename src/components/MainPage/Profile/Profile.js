import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';

export const Profile =()=> {

    return (
        <div>
            <img src='/img/1.jpg'/>
            <p>СТРАНИЦА ПРОФИЛЯ</p>
            <Link to='/'>
                <Button variant="outlined" >ВЕРНУТЬСЯ НА ГЛАВНУЮ СТРАНИЦУ</Button>
            </Link>
        </div>
    )
}