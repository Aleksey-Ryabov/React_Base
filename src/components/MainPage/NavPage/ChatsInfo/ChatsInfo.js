import Paper from '@mui/material/Paper';
import { Messages } from '../Messages/Messages';
import Button from '@mui/material/Button';
import { BrowserRouter as Router, Switch, Route, Link, useHistory, useParams} from "react-router-dom";
import { makeStyles } from '@material-ui/styles';

export const ChatsInfo =()=> {
    const useStyles = makeStyles({
        root: {
            marginTop: '20px',
            marginBottom: '20px'
        }
    });
    const classes= useStyles();
    const {id} = useParams();
    const history = useHistory();

    return (
        <>
            <div key={id} className="chat-element">
                <Paper elevation={10} className="messagesUI">
                    <p className="messagesUI-p">ЧАТ № {id}</p>
                    <Messages />
                </Paper>
                <Button className={classes.root} onClick={()=> history.push(`/navpage`)} variant="outlined"> Вернуться на страницу навигации </Button>
            </div>
        </>

    )
}
