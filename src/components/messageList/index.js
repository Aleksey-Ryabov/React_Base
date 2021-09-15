import React, {useState,useEffect, useRef} from "react";
import './style.css'

export const MessageInput =()=> {

    const inputRef = useRef();
    const [messages, setMessages] = useState([]);
    const [user, setUser] = useState('');
    const [comment, setComment] = useState('')


    const getNewComment = (event)=> {
        event.preventDefault();
        const newComment = {
            id: parseInt(Math.random()*100),
            user,
            comment
        }
        setMessages([...messages, newComment])
        console.log(messages)
    }

    useEffect(()=> {
        setTimeout(()=>{
            if(messages.length >= 1){
                alert(`Добавлен новый комментарий! От пользователя ${user}`)
            }
        }, 2000)
    }, [messages])

    return (
        <form>
            <div className='messagesUI'>
                <p className='messagesUI-p'>ЧАТ</p>
                {
                    messages.map((message) =>{
                        return <p className='messagesUI-comment'>Пользователь: {message.user} , Текст комментария: {message.comment}</p>
                    })
                }
            </div>
            <div className='messages-input'>
                <input onChange={event=> setUser(event.target.value)} value={user} type='text' placeholder='Введите имя'/>
                <input onChange={event=> setComment(event.target.value)} type='text' placeholder='Введите комментарий'/><br/>
                <button onClick={getNewComment}>Отправить данные</button>
            </div>
        </form>
    )

}


