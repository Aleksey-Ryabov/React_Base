import { useState } from "react"
import { useDispatch } from "react-redux";
import { fetchAuth } from "../../../../../store/actions/AuthAction";
import './auth.css'


export const Authorize =()=> {

    const dispatch = useDispatch();
    const [email, setEmail]= useState('Пусто');
    const [password, setPassword]= useState('Пусто');

    const getSendData = (event)=> {
        event.preventDefault();
        console.log('данные отправлены', email, password);
        dispatch(fetchAuth({email, password}))
    }

    return (
        <>
        <form className='auth-form'>
            <p>Используйте данные для входа -  email: "al@geekbrains.ru", password: "123" </p>
            <input onChange={(event)=> setEmail(event.target.value)} type='email' placeholder='введите email' />
            <input onChange={(event)=> setPassword(event.target.value)} type='password' placeholder='введите пароль'/>
            <button onClick={getSendData}>ОТПРАВИТЬ ДАННЫЕ</button>
        </form>
        </>
    )
}