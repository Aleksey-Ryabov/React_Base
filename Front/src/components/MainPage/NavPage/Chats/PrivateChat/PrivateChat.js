import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { BrowserRouter as Router, Switch, Route, Link, useHistory} from "react-router-dom";
import { makeStyles } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { Messages } from '../../Messages/Messages';
import './private.css'

const useStyles = makeStyles({
    root: {
      marginBottom: '20px',
      backgroundColor : 'black'
    }
  });


export const PrivateChat =()=> {

    const todoChat = useSelector(state => state.chatsReduce);
    const dispatchChat = useDispatch();
    const classes = useStyles();
    const history = useHistory();

    return (
            <div className="chat-element-pr">
                <Paper elevation={10} className="messagesUI-pr">
                    <div className='chat-elem-body-pr'>
                        <p className="messagesUI-p">ЧАТ №</p>
                        <Messages />
                    </div>
                </Paper>
            </div>
    )
}