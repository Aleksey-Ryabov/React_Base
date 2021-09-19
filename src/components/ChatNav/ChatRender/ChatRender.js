import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { Messages } from './Messages/Messages';
import './style.css'

export const ChatRender =({chatType})=> {

    const [chatArray, setChatArray] = useState([
        {id: 1, type: 'SOCIAL CHAT'},
        {id: 2, type: 'POLITIC CHAT'},
        {id: 3, type: 'NEWS CHAT'}
    ])


    return (
        <div>
            {chatArray.map((elem)=> {
                return (
                    <div key={elem.id} className='chat-element'>
                        <Paper elevation={10} className="messagesUI">
                            <p className="messagesUI-p">{elem.type}</p>
                            <Messages/>
                        </Paper>
                    </div>
                )
            })}
        </div>
    )
}