import Paper from '@mui/material/Paper';
import { Messages } from '../Messages/Messages';
import Button from '@mui/material/Button';
import { BrowserRouter as Router, Switch, Route, Link, useHistory} from "react-router-dom";
import { makeStyles } from '@material-ui/styles';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import ChatAddAction, { ChatDelete } from '../../../../store/actions/ChatAddAction';


const useStyles = makeStyles({
    root: {
      marginBottom: '20px',
    }
  });


export const Chats =()=> {

    const todoChat = useSelector(state => state.chatsReduce);
    const dispatchChat = useDispatch();
    const classes = useStyles();
    const history = useHistory();
    const addChats = ()=> {
        dispatchChat(ChatAddAction())
    };
    const chatDelete = (id)=> {
        dispatchChat(ChatDelete(id))
    }

    return (
        <>
            <div className='chat-add-buttons'>
               <Button onClick={addChats} variant="outlined" className={classes.root}>ДОБАВИТЬ ЧАТ</Button>
            </div>
            {todoChat.map((elem) => {
                return (
                    <div key={elem.id} className="chat-element">
                        <Paper elevation={10} className="messagesUI">
                            <div className='chat-elem-body'>
                                <p className="messagesUI-p">ЧАТ № {elem.id}</p>
                                <Button style={{'marginBottom': '20px'}} onClick={()=> history.push(`/chats/${elem.id}`)} variant="outlined">Перейти на страницу чата № {elem.id}</Button>
                                <Messages />
                                <Button onClick={()=>chatDelete(elem.id)} style={{'margin-bottom': '20px'}} variant="outlined" startIcon={<DeleteIcon />}> Удалить чат </Button>
                            </div>
                        </Paper>
                    </div>
                );
            })}
        </>
    )
}