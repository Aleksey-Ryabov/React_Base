import { makeStyles } from '@material-ui/styles';
import './messagesStyle.css'
import { useDispatch, useSelector } from 'react-redux';
import { Marking } from './Marking/Marking';

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 0,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
      marginTop: '20px'
    },
    input: {
        marginRight: '50px'
    }
  });

export const Messages = ({id})=> {

    const dispatch = useDispatch();
    const messages = useSelector(state => state.chatsReduce.chatMessages);
    const userName = useSelector(state => state.messageReduce.user);
    const commentUser = useSelector(state => state.messageReduce.comment);
    const classes = useStyles();

        return (
            <>
                <Marking useStyles={useStyles} 
                    messages={messages} userName={userName} commentUser={commentUser} classes={classes} id={id}
                />  
            </>
        )
}