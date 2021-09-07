import React from 'react';
import './style.css'

export const Message =({props})=> {

    console.log(props)
    return (
        <div className='message'>
            <p className='message-p'>Полученное сообщение: {props}</p>
        </div>
    )
}